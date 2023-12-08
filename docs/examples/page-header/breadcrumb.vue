<template>
  <hc-page-header>
    <template #breadcrumb>
      <hc-breadcrumb separator="/">
        <hc-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </hc-breadcrumb-item>
        <hc-breadcrumb-item
          ><a href="./page-header.html">route 1</a></hc-breadcrumb-item
        >
        <hc-breadcrumb-item>route 2</hc-breadcrumb-item>
      </hc-breadcrumb>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </hc-page-header>
</template>
