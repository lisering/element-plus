import { withInstall, withNoopInstall } from '@hicor-ui/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

export const HcTimeline = withInstall(Timeline, {
  TimelineItem,
})
export default HcTimeline
export const HcTimelineItem = withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
