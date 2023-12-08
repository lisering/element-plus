import { withInstall, withNoopInstall } from '@hicor-ui/utils'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

export const HcTabs = withInstall(Tabs, {
  TabPane,
})
export const HcTabPane = withNoopInstall(TabPane)
export default HcTabs

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
export * from './src/constants'
