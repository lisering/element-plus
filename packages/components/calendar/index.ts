import { withInstall } from '@hicor-ui/utils'
import Calendar from './src/calendar.vue'

export const HcCalendar = withInstall(Calendar)
export default HcCalendar

export * from './src/calendar'
export type {
  CalendarDateTableInstance,
  DateTableInstance,
  CalendarInstance,
} from './src/instance'
