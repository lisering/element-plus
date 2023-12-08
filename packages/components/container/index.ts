import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'

export const HcContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main,
})

export default HcContainer
export const HcAside = withNoopInstall(Aside)
export const HcFooter = withNoopInstall(Footer)
export const HcHeader = withNoopInstall(Header)
export const HcMain = withNoopInstall(Main)

export type ContainerInstance = InstanceType<typeof Container>
export type AsideInstance = InstanceType<typeof Aside>
export type FooterInstance = InstanceType<typeof Footer>
export type HeaderInstance = InstanceType<typeof Header>
export type MainInstance = InstanceType<typeof Main>
