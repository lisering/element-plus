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

#### 自动导入 <hc-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">推荐</hc-tag>

首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 `Vite` 的配置文件中

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

### 手动导入

Hicor Ui 提供了基于 ES Module 的开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

但你需要安装 [unplugin-element-plus](https://github.com/hicor-ui/unplugin-element-plus) 来导入样式。 配置文档参考 [docs](https://github.com/hicor-ui/unplugin-element-plus#readme).

> App.vue

```html
<template>
  <hc-button>我是 HcButton</hc-button>
</template>
<script>
  import { HcButton } from 'hicor-ui'
  export default {
    components: { HcButton },
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
import { HcMessage } from 'hicor-ui'
```

:::

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
  <hc-config-provider :size="size" :z-index="zIndex">
    <app />
  </hc-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { HcConfigProvider } from 'hicor-ui'

export default defineComponent({
  components: {
    HcConfigProvider,
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
