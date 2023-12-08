import { withInstall, withNoopInstall } from '@hicor-ui/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

export const HcCarousel = withInstall(Carousel, {
  CarouselItem,
})

export default HcCarousel

export const HcCarouselItem = withNoopInstall(CarouselItem)

export * from './src/carousel'
export * from './src/carousel-item'
export * from './src/constants'

export type { CarouselInstance, CarouselItemInstance } from './src/instance'
