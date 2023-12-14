import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'
import {
  buildOutput,
  hcOutput,
  hcPackage,
  hcRoot,
  projRoot,
} from '@hicor-ui/build-utils'
import { buildConfig, run, runTask, withTaskName } from './src'
import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(hcPackage, path.join(hcOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(hcOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'global.d.ts'),
      path.resolve(hcOutput, 'global.d.ts')
    ),
    copyFile(path.resolve(hcRoot, '.npmrc'), path.resolve(hcOutput, '.npmrc')),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(hcOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(hcOutput, 'theme-chalk/index.css'),
    path.resolve(hcOutput, 'dist/index.css')
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(hcOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    runTask('buildHelper'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
)

export * from './src'
