---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 Hicor Ui。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import HicorUi from 'hicor-ui'
import 'hicor-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(HicorUi)
app.mount('#app')
```

#### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["hicor-ui/global"]
  }
}
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

#### 自动导入 <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">推荐</el-tag>

首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中

##### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

##### Webpack

```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

想了解更多打包 ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) 和配置工具，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。

#### Nuxt

对于 Nuxt 用户，只需要安装 `@hicor-ui/nuxt` 即可。

```shell
npm install -D @hicor-ui/nuxt
```

然后将下面的代码写入你的配置文件.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@hicor-ui/nuxt'],
})
```

配置文档参考 [docs](https://github.com/hicor-ui/hicor-ui-nuxt#readme).

### 手动导入

Hicor Ui 提供了基于 ES Module 的开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

但你需要安装 [unplugin-element-plus](https://github.com/hicor-ui/unplugin-element-plus) 来导入样式。 配置文档参考 [docs](https://github.com/hicor-ui/unplugin-element-plus#readme).

> App.vue

```html
<template>
  <el-button>我是 ElButton</el-button>
</template>
<script>
  import { ElButton } from 'hicor-ui'
  export default {
    components: { ElButton },
  }
</script>
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import HicorUi from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [HicorUi()],
})
```

:::warning

如果使用 `unplugin-element-plus` 并且只使用组件 API，你需要手动导入样式。

Example:

```ts
import 'hicor-ui/es/components/message/style/css'
import { ElMessage } from 'hicor-ui'
```

:::

## 快捷搭建项目模板

我们提供了 [Vite 模板](https://github.com/hicor-ui/hicor-ui-vite-starter)。

对于Nuxt 用户，我们有一个 [Nuxt 模板](https://github.com/hicor-ui/hicor-ui-nuxt-starter)。

对于 Laravel 用户，我们也准备了[ Laravel 模板](https://github.com/hicor-ui/hicor-ui-in-laravel-starter)。

## 全局配置

在引入 HicorUi 时，可以传入一个包含 `size` 和 `zIndex` 属性的全局配置对象。 `size` 用于设置表单组件的默认尺寸，`zIndex` 用于设置弹出组件的层级，`zIndex` 的默认值为 `2000`。

完整引入：

```ts
import { createApp } from 'vue'
import HicorUi from 'hicor-ui'
import App from './App.vue'

const app = createApp(App)
app.use(HicorUi, { size: 'small', zIndex: 3000 })
```

按需引入:

```vue
<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <app />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'hicor-ui'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```

## 使用 Nuxt.js

我们也可以使用 [Nuxt.js](https://v3.nuxtjs.org/)：

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/edit/#!/nuxt-hicor-ui?path=components%2FExamples.vue%3A1%3A0" alt="nuxt-hicor-ui on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## 开始使用

现在你可以启动项目了。 对于每个组件的用法，请查阅[对应的独立文档](https://hicor-ui.org/zh-CN/component/button.html)。
