---
title: Apply Button 按钮
lang: zh-CN
---

# Apply Button 按钮

标题样式，常用于页面布局区域标题。

## 基础用法

设置title属性来设置标题。

:::demo 通过设置 `text` 属性来设置按钮文字。

apply-button/basic

:::

### Apply Button  属性

| 名称         | 说明             | 类型                          | 默认值     | 必填 |
| ---------- | -------------- | --------------------------- | ------- | -- |
| `text`   | 按钮文字名称           | ^[string]                   | ``     | 否  |
| `color-type`   | 颜色风格        | ^[enum]`'blue-box' \| 'green-box'`  | `blue-box` | 否  |
| `icon-name`   | 图标名称        | ^[string] | `icon-qianshou` | 否  |
| `icon-type`   | 图标类型        | ^[string] | `111` | 否  |
| `disabled`   | 是否禁用        | ^[boolean]  | `false` | 否  |
| `mini-button`   | 是否不显示文字        | ^[boolean] | `false` |  否  |
| `type`   | 按钮类型        | ^[string]  | `111` | 否  |

### Apply Button  事件

| 名称       | 说明               | 类型                                                                     |
| -------- | ---------------- | ---------------------------------------------------------------------- |
| `buttonClick` | 按钮点击时触发的事件 | ^[Function]`(type: string, flag: Boolen) => void`                               |