<template>
  <div :class="ns.b()">
    <el-menu
      ref="refMenu"
      :unique-opened="true"
      mode="horizontal"
      menu-trigger="hover"
      :ellipsis="false"
      @select="handleSelect"
    >
      <template v-for="item in normalMenuList" :key="item.funcPath">
        <el-menu-item v-if="!item.children" :index="JSON.stringify(item)"
          ><span class="font-size-medium">{{
            item.funcName
          }}</span></el-menu-item
        >

        <el-sub-menu
          v-else
          :popper-class="'popperClass ' + item.funcPath"
          :index="JSON.stringify(item)"
        >
          <template #title
            ><span class="font-size-medium font-weight-primary">{{
              item.funcName
            }}</span></template
          >
          <template v-for="child in item.children">
            <template v-if="child.children">
              <el-sub-menu :key="child.funcPath" :index="JSON.stringify(child)">
                <template #title
                  ><span class="font-size-medium font-weight-primary">{{
                    child.funcName
                  }}</span></template
                >
                <template
                  v-for="children in child.children"
                  :key="children.funcPath"
                >
                  <el-menu-item :index="JSON.stringify(children)"
                    ><span class="font-size-medium">{{
                      children.funcName
                    }}</span></el-menu-item
                  >
                </template>
              </el-sub-menu>
            </template>
            <el-menu-item
              v-else
              :key="child.funcPath"
              :index="JSON.stringify(child)"
            >
              <span class="font-size-medium">{{ child.funcName }}</span>
            </el-menu-item>
          </template>
          <iframe
            style="
              background-color: transparent;
              position: absolute;
              z-index: -9999;
              width: 102%;
              height: 102%;
              top: -1%;
              left: -1%;
              border: 0;
            "
          />
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import '@hicor-ui/theme-chalk/src/menu.scss'
import '@hicor-ui/theme-chalk/src/menu-item.scss'
import { ElMenu, ElMenuItem, ElSubMenu } from '@hicor-ui/components'
import { useNamespace } from '@hicor-ui/hooks'
import { topMenuEmits, topMenuProps } from './top-menu'

defineOptions({
  name: 'ElTopMenu',
})
defineProps(topMenuProps)
const emit = defineEmits(topMenuEmits)
const ns = useNamespace('top-menu')
const handleSelect = (index: string) => {
  emit('handleSelect', index)
}
</script>
