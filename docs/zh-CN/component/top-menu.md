---
title: TopMenu 顶部菜单
lang: zh-CN
---

# TopMenu 顶部菜单

第一套布局顶部菜单。

## 基础用法

设置normalMenuList属性来设置菜单数据。

:::demo 通过设置 `normalMenuList` 属性来设置标题内容。

top-menu/basic

:::

### TopMenu 属性

| 名称         | 说明             | 类型                          | 默认值     | 必填 |
| ---------- | -------------- | --------------------------- | ------- | -- |
| `normalMenuList`   | 标题名称           | ^[MenuFunctionsInterface]                   | ``     | 是  |

### TopMenu 事件

| 名称       | 说明               | 类型                                                                     |
| -------- | ---------------- | ---------------------------------------------------------------------- |
| `handleSelect` | 菜单点击时触发的事件 | ^[Function]`(index: string) => void`                               |