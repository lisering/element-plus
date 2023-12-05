import { withInstall } from '@hicor-ui/utils'
import Calendar from './src/calendar.vue'

export const ElCalendar = withInstall(Calendar)
export default ElCalendar

export * from './src/calendar'
export type {
  CalendarDateTableInstance,
  DateTableInstance,
  CalendarInstance,
} from './src/instance'
