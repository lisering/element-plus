import { compare } from 'compare-versions'
import type { ComponentInfo, ComponentResolver, SideEffectsInfo } from './types'
import { getPkgVersion, kebabCase } from './utils'

export interface HicorUiResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * use commonjs lib & source css or scss for ssr
   */
  ssr?: boolean

  /**
   * specify hicor-ui version to load style
   *
   * @default installed version
   */
  version?: string

  /**
   * auto import for directives
   *
   * @default true
   */
  directives?: boolean

  /**
   * exclude component name, if match do not resolve the name
   */
  exclude?: RegExp

  /**
   * a list of component names that have no styles, so resolving their styles file should be prevented
   */
  noStylesComponents?: string[]

  /**
   * nightly version
   */
  nightly?: boolean
}

type HicorUiResolverOptionsResolved = Required<Omit<HicorUiResolverOptions, 'exclude'>> &
  Pick<HicorUiResolverOptions, 'exclude'>

/**
 * @deprecated
 * @param partialName
 * @param options
 */
function getSideEffectsLegacy(
  partialName: string,
  options: HicorUiResolverOptionsResolved,
): SideEffectsInfo | undefined {
  const { importStyle } = options
  if (!importStyle)
    return

  if (importStyle === 'sass') {
    return [
      'hicor-ui/packages/theme-chalk/src/base.scss',
      `hicor-ui/packages/theme-chalk/src/${partialName}.scss`,
    ]
  }
  else if (importStyle === true || importStyle === 'css') {
    return [
      'hicor-ui/lib/theme-chalk/base.css',
      `hicor-ui/lib/theme-chalk/el-${partialName}.css`,
    ]
  }
}

function getSideEffects(dirName: string, options: HicorUiResolverOptionsResolved): SideEffectsInfo | undefined {
  const { importStyle, ssr, nightly } = options
  const themeFolder = nightly ? '@hicor-ui/nightly/theme-chalk' : 'hicor-ui/theme-chalk'
  const esComponentsFolder = nightly ? '@hicor-ui/nightly/es/components' : 'hicor-ui/es/components'

  if (importStyle === 'sass') {
    return ssr
      ? [`${themeFolder}/src/base.scss`, `${themeFolder}/src/${dirName}.scss`]
      : [`${esComponentsFolder}/base/style/index`, `${esComponentsFolder}/${dirName}/style/index`]
  }
  else if (importStyle === true || importStyle === 'css') {
    return ssr
      ? [`${themeFolder}/base.css`, `${themeFolder}/el-${dirName}.css`]
      : [`${esComponentsFolder}/base/style/css`, `${esComponentsFolder}/${dirName}/style/css`]
  }
}

function resolveComponent(name: string, options: HicorUiResolverOptionsResolved): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude))
    return

  if (!name.match(/^El[A-Z]/))
    return

  if (name.match(/^ElIcon.+/)) {
    return {
      name: name.replace(/^ElIcon/, ''),
      from: '@element-plus/icons-vue',
    }
  }

  const partialName = kebabCase(name.slice(2))// ElTableColumn -> table-column
  const { version, ssr, nightly } = options

  // >=1.1.0-beta.1
  if (compare(version, '1.1.0-beta.1', '>=') || nightly) {
    return {
      name,
      from: `${nightly ? '@hicor-ui/nightly' : 'hicor-ui'}/${ssr ? 'lib' : 'es'}`,
      sideEffects: getSideEffects(partialName, options),
    }
  }
  // >=1.0.2-beta.28
  else if (compare(version, '1.0.2-beta.28', '>=')) {
    return {
      from: `hicor-ui/es/el-${partialName}`,
      sideEffects: getSideEffectsLegacy(partialName, options),
    }
  }
  // for <=1.0.1
  else {
    return {
      from: `hicor-ui/lib/el-${partialName}`,
      sideEffects: getSideEffectsLegacy(partialName, options),
    }
  }
}

function resolveDirective(name: string, options: HicorUiResolverOptionsResolved): ComponentInfo | undefined {
  if (!options.directives)
    return

  const directives: Record<string, { importName: string; styleName: string }> = {
    Loading: { importName: 'ElLoadingDirective', styleName: 'loading' },
    Popover: { importName: 'ElPopoverDirective', styleName: 'popover' },
    InfiniteScroll: { importName: 'ElInfiniteScroll', styleName: 'infinite-scroll' },
  }

  const directive = directives[name]
  if (!directive)
    return

  const { version, ssr, nightly } = options

  // >=1.1.0-beta.1
  if (compare(version, '1.1.0-beta.1', '>=') || nightly) {
    return {
      name: directive.importName,
      from: `${nightly ? '@hicor-ui/nightly' : 'hicor-ui'}/${ssr ? 'lib' : 'es'}`,
      sideEffects: getSideEffects(directive.styleName, options),
    }
  }
}

const noStylesComponents = ['ElAutoResizer']

/**
 * Resolver for Hicor Ui
 */
export function HicorUiResolver(
  options: HicorUiResolverOptions = {},
): ComponentResolver[] {
  let optionsResolved: HicorUiResolverOptionsResolved

  async function resolveOptions() {
    if (optionsResolved)
      return optionsResolved
    optionsResolved = {
      ssr: false,
      version: await getPkgVersion('hicor-ui', '2.2.2'),
      importStyle: 'css',
      directives: true,
      exclude: undefined,
      noStylesComponents: options.noStylesComponents || [],
      nightly: false,
      ...options,
    }
    return optionsResolved
  }

  return [
    {
      type: 'component',
      resolve: async (name: string) => {
        const options = await resolveOptions()

        if ([...options.noStylesComponents, ...noStylesComponents].includes(name))
          return resolveComponent(name, { ...options, importStyle: false })
        else return resolveComponent(name, options)
      },
    },
    {
      type: 'directive',
      resolve: async (name: string) => {
        return resolveDirective(name, await resolveOptions())
      },
    },
  ]
}