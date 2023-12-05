import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { HicorUiResolver } from './hicorResolver'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import VueMacros from 'unplugin-vue-macros/vite'
import esbuild from 'rollup-plugin-esbuild'
import {
  hcPackage,
  hcRoot,
  getPackageDependencies,
  pkgRoot,
  projRoot,
} from '@hicor-ui/build-utils'
import type { Plugin } from 'vite'
import './vite.init'

const esbuildPlugin = (): Plugin => ({
  ...esbuild({
    target: 'chrome64',
    loaders: {
      '.vue': 'js',
    },
  }),
  enforce: 'post',
})

// const isUppercase = (char: string) => {
//   return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
// }

// const convert = (str: string) => {
//   let newString = ''
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i]
//     if (isUppercase(currentChar)) {
//       if (i === 0) {
//         newString += `${currentChar.toLowerCase()}`
//       } else {
//         newString += `-${currentChar.toLowerCase()}`
//       }
//     } else {
//       newString += currentChar
//     }
//   }
//   return newString
// }

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  let { dependencies } = getPackageDependencies(hcPackage)
  dependencies = dependencies.filter((dep) => !dep.startsWith('@types/')) // exclude dts deps
  const optimizeDeps = (
    await glob(['dayjs/(locale|plugin)/*.js'], {
      cwd: path.resolve(projRoot, 'node_modules'),
    })
  ).map((dep) => dep.replace(/\.js$/, ''))

  return {
    resolve: {
      alias: [
        {
          find: /^hicor-ui(\/(es|lib))?$/,
          replacement: path.resolve(hcRoot, 'index.ts'),
        },
        {
          find: /^hicor-ui\/(es|lib)\/(.*)$/,
          replacement: `${pkgRoot}/$2`,
        },
      ],
    },
    server: {
      host: true,
      port: 8000,
      https: !!env.HTTPS,
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue(),
          vueJsx: vueJsx(),
        },
      }),
      esbuildPlugin(),
      Components({
        include: `${__dirname}/**`,
        resolvers: HicorUiResolver({ importStyle: 'sass' }),
        // resolvers: [
        //   (componentName) => {
        //     console.log('componentName', componentName)
        //     const uiName = 'hicor-ui'
        //     const esComponentsFolder = `${uiName}/es/components`
        //     console.log('esComponentsFolder', esComponentsFolder)
        //     const newPath = convert(componentName.slice(2))
        //     console.log('newPath', newPath)
        //     if (componentName.startsWith('El')) {
        //       const obj = {
        //         name: componentName.slice(),
        //         from: uiName,
        //         sideEffects: [
        //           `${esComponentsFolder}/base/style/index`,
        //           `${esComponentsFolder}/${newPath}/style/index`,
        //         ],
        //       }
        //       console.log('obj', obj)
        //       return obj
        //     }

        //   },
        // ],
        dts: false,
      }),
      mkcert(),
      Inspect(),
    ],

    optimizeDeps: {
      include: ['vue', '@vue/shared', ...dependencies, ...optimizeDeps],
    },
    esbuild: {
      target: 'chrome64',
    },
  }
})
