---
title: 内置过渡动画
lang: zh-CN
---

# 内置过渡动画

Hicor Ui 内应用在部分组件的过渡动画，你也可以直接使用。 在使用之前，请阅读 [官方的过渡组件文档](https://vuejs.org/guide/built-ins/transition.html)。

## Fade 淡入淡出

:::demo 提供 `hc-fade-in-linear` 和 `hc-fade-in` 两种效果。

transitions/fade

:::

## Zoom 缩放

:::demo 提供 `hc-zoom-in-center`，`hc-zoom-in-top` 和 `hc-zoom-in-bottom` 三种效果。

transitions/zoom

:::

## Collapse 折叠面板

使用 `hc-collapse-transition` 组件实现折叠展开效果。

:::demo

transitions/collapse

:::

## 按需导入

```ts
// collapse
import { HcCollapseTransition } from 'hicor-ui'
// fade/zoom
import 'hicor-ui/lib/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(HcCollapseTransition.name, HcCollapseTransition)
```
