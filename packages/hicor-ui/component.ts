import { ElAffix } from '@hicor-ui/components/affix'
import { ElAlert } from '@hicor-ui/components/alert'
import { ElAutocomplete } from '@hicor-ui/components/autocomplete'
import { ElAvatar } from '@hicor-ui/components/avatar'
import { ElBacktop } from '@hicor-ui/components/backtop'
import { ElBadge } from '@hicor-ui/components/badge'
import { ElBreadcrumb, ElBreadcrumbItem } from '@hicor-ui/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@hicor-ui/components/button'
import { ElCalendar } from '@hicor-ui/components/calendar'
import { ElCard } from '@hicor-ui/components/card'
import { ElCarousel, ElCarouselItem } from '@hicor-ui/components/carousel'
import { ElCascader } from '@hicor-ui/components/cascader'
import { ElCascaderPanel } from '@hicor-ui/components/cascader-panel'
import { ElCheckTag } from '@hicor-ui/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@hicor-ui/components/checkbox'
import { ElCol } from '@hicor-ui/components/col'
import { ElCollapse, ElCollapseItem } from '@hicor-ui/components/collapse'
import { ElCollapseTransition } from '@hicor-ui/components/collapse-transition'
import { ElColorPicker } from '@hicor-ui/components/color-picker'
import { ElConfigProvider } from '@hicor-ui/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@hicor-ui/components/container'
import { ElDatePicker } from '@hicor-ui/components/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@hicor-ui/components/descriptions'
import { ElDialog } from '@hicor-ui/components/dialog'
import { ElDivider } from '@hicor-ui/components/divider'
import { ElDrawer } from '@hicor-ui/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@hicor-ui/components/dropdown'
import { ElEmpty } from '@hicor-ui/components/empty'
import { ElForm, ElFormItem } from '@hicor-ui/components/form'
import { ElIcon } from '@hicor-ui/components/icon'
import { ElImage } from '@hicor-ui/components/image'
import { ElImageViewer } from '@hicor-ui/components/image-viewer'
import { ElInput } from '@hicor-ui/components/input'
import { ElInputNumber } from '@hicor-ui/components/input-number'
import { ElLink } from '@hicor-ui/components/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@hicor-ui/components/menu'
import { ElPageHeader } from '@hicor-ui/components/page-header'
import { ElPagination } from '@hicor-ui/components/pagination'
import { ElPopconfirm } from '@hicor-ui/components/popconfirm'
import { ElPopover } from '@hicor-ui/components/popover'
import { ElPopper } from '@hicor-ui/components/popper'
import { ElProgress } from '@hicor-ui/components/progress'
import {
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from '@hicor-ui/components/radio'
import { ElRate } from '@hicor-ui/components/rate'
import { ElResult } from '@hicor-ui/components/result'
import { ElRow } from '@hicor-ui/components/row'
import { ElScrollbar } from '@hicor-ui/components/scrollbar'
import { ElOption, ElOptionGroup, ElSelect } from '@hicor-ui/components/select'
import { ElSelectV2 } from '@hicor-ui/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@hicor-ui/components/skeleton'
import { ElSlider } from '@hicor-ui/components/slider'
import { ElSpace } from '@hicor-ui/components/space'
import { ElStatistic } from '@hicor-ui/components/statistic'
import { ElCountdown } from '@hicor-ui/components/countdown'
import { ElStep, ElSteps } from '@hicor-ui/components/steps'
import { ElSwitch } from '@hicor-ui/components/switch'
import { ElTable, ElTableColumn } from '@hicor-ui/components/table'
import { ElAutoResizer, ElTableV2 } from '@hicor-ui/components/table-v2'
import { ElTabPane, ElTabs } from '@hicor-ui/components/tabs'
import { ElTag } from '@hicor-ui/components/tag'
import { ElText } from '@hicor-ui/components/text'
import { ElTimePicker } from '@hicor-ui/components/time-picker'
import { ElTimeSelect } from '@hicor-ui/components/time-select'
import { ElTimeline, ElTimelineItem } from '@hicor-ui/components/timeline'
import { ElTooltip } from '@hicor-ui/components/tooltip'
import { ElTooltipV2 } from '@hicor-ui/components/tooltip-v2'
import { ElTransfer } from '@hicor-ui/components/transfer'
import { ElTree } from '@hicor-ui/components/tree'
import { ElTreeSelect } from '@hicor-ui/components/tree-select'
import { ElTreeV2 } from '@hicor-ui/components/tree-v2'
import { ElUpload } from '@hicor-ui/components/upload'
import { ElWatermark } from '@hicor-ui/components/watermark'
import { ElTitle, ElTopMenu } from '@hicor-ui/components'

import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElText,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
  ElWatermark,
  ElTopMenu,
  ElTitle,
] as Plugin[]
