// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElAffix: typeof import('hicor-ui')['ElAffix']
    ElAlert: typeof import('hicor-ui')['ElAlert']
    ElAside: typeof import('hicor-ui')['ElAside']
    ElAutocomplete: typeof import('hicor-ui')['ElAutocomplete']
    ElAvatar: typeof import('hicor-ui')['ElAvatar']
    ElBacktop: typeof import('hicor-ui')['ElBacktop']
    ElBadge: typeof import('hicor-ui')['ElBadge']
    ElBreadcrumb: typeof import('hicor-ui')['ElBreadcrumb']
    ElBreadcrumbItem: typeof import('hicor-ui')['ElBreadcrumbItem']
    ElButton: typeof import('hicor-ui')['ElButton']
    ElButtonGroup: typeof import('hicor-ui')['ElButtonGroup']
    ElCalendar: typeof import('hicor-ui')['ElCalendar']
    ElCard: typeof import('hicor-ui')['ElCard']
    ElCarousel: typeof import('hicor-ui')['ElCarousel']
    ElCarouselItem: typeof import('hicor-ui')['ElCarouselItem']
    ElCascader: typeof import('hicor-ui')['ElCascader']
    ElCascaderPanel: typeof import('hicor-ui')['ElCascaderPanel']
    ElCheckbox: typeof import('hicor-ui')['ElCheckbox']
    ElCheckboxButton: typeof import('hicor-ui')['ElCheckboxButton']
    ElCheckboxGroup: typeof import('hicor-ui')['ElCheckboxGroup']
    ElCol: typeof import('hicor-ui')['ElCol']
    ElCollapse: typeof import('hicor-ui')['ElCollapse']
    ElCollapseItem: typeof import('hicor-ui')['ElCollapseItem']
    ElCollapseTransition: typeof import('hicor-ui')['ElCollapseTransition']
    ElColorPicker: typeof import('hicor-ui')['ElColorPicker']
    ElContainer: typeof import('hicor-ui')['ElContainer']
    ElConfigProvider: typeof import('hicor-ui')['ElConfigProvider']
    ElDatePicker: typeof import('hicor-ui')['ElDatePicker']
    ElDialog: typeof import('hicor-ui')['ElDialog']
    ElDivider: typeof import('hicor-ui')['ElDivider']
    ElDrawer: typeof import('hicor-ui')['ElDrawer']
    ElDropdown: typeof import('hicor-ui')['ElDropdown']
    ElDropdownItem: typeof import('hicor-ui')['ElDropdownItem']
    ElDropdownMenu: typeof import('hicor-ui')['ElDropdownMenu']
    ElEmpty: typeof import('hicor-ui')['ElEmpty']
    ElFooter: typeof import('hicor-ui')['ElFooter']
    ElForm: typeof import('hicor-ui')['ElForm']
    ElFormItem: typeof import('hicor-ui')['ElFormItem']
    ElHeader: typeof import('hicor-ui')['ElHeader']
    ElIcon: typeof import('hicor-ui')['ElIcon']
    ElImage: typeof import('hicor-ui')['ElImage']
    ElImageViewer: typeof import('hicor-ui')['ElImageViewer']
    ElInput: typeof import('hicor-ui')['ElInput']
    ElInputNumber: typeof import('hicor-ui')['ElInputNumber']
    ElLink: typeof import('hicor-ui')['ElLink']
    ElMain: typeof import('hicor-ui')['ElMain']
    ElMenu: typeof import('hicor-ui')['ElMenu']
    ElMenuItem: typeof import('hicor-ui')['ElMenuItem']
    ElMenuItemGroup: typeof import('hicor-ui')['ElMenuItemGroup']
    ElOption: typeof import('hicor-ui')['ElOption']
    ElOptionGroup: typeof import('hicor-ui')['ElOptionGroup']
    ElPageHeader: typeof import('hicor-ui')['ElPageHeader']
    ElPagination: typeof import('hicor-ui')['ElPagination']
    ElPopconfirm: typeof import('hicor-ui')['ElPopconfirm']
    ElPopper: typeof import('hicor-ui')['ElPopper']
    ElPopover: typeof import('hicor-ui')['ElPopover']
    ElProgress: typeof import('hicor-ui')['ElProgress']
    ElRadio: typeof import('hicor-ui')['ElRadio']
    ElRadioButton: typeof import('hicor-ui')['ElRadioButton']
    ElRadioGroup: typeof import('hicor-ui')['ElRadioGroup']
    ElRate: typeof import('hicor-ui')['ElRate']
    ElRow: typeof import('hicor-ui')['ElRow']
    ElScrollbar: typeof import('hicor-ui')['ElScrollbar']
    ElSelect: typeof import('hicor-ui')['ElSelect']
    ElSlider: typeof import('hicor-ui')['ElSlider']
    ElStep: typeof import('hicor-ui')['ElStep']
    ElSteps: typeof import('hicor-ui')['ElSteps']
    ElSubMenu: typeof import('hicor-ui')['ElSubMenu']
    ElSwitch: typeof import('hicor-ui')['ElSwitch']
    ElTabPane: typeof import('hicor-ui')['ElTabPane']
    ElTable: typeof import('hicor-ui')['ElTable']
    ElTableColumn: typeof import('hicor-ui')['ElTableColumn']
    ElTabs: typeof import('hicor-ui')['ElTabs']
    ElTag: typeof import('hicor-ui')['ElTag']
    ElText: typeof import('hicor-ui')['ElText']
    ElTimePicker: typeof import('hicor-ui')['ElTimePicker']
    ElTimeSelect: typeof import('hicor-ui')['ElTimeSelect']
    ElTimeline: typeof import('hicor-ui')['ElTimeline']
    ElTimelineItem: typeof import('hicor-ui')['ElTimelineItem']
    ElTooltip: typeof import('hicor-ui')['ElTooltip']
    ElTransfer: typeof import('hicor-ui')['ElTransfer']
    ElTree: typeof import('hicor-ui')['ElTree']
    ElTreeV2: typeof import('hicor-ui')['ElTreeV2']
    ElTreeSelect: typeof import('hicor-ui')['ElTreeSelect']
    ElUpload: typeof import('hicor-ui')['ElUpload']
    ElSpace: typeof import('hicor-ui')['ElSpace']
    ElSkeleton: typeof import('hicor-ui')['ElSkeleton']
    ElSkeletonItem: typeof import('hicor-ui')['ElSkeletonItem']
    ElStatistic: typeof import('hicor-ui')['ElStatistic']
    ElCheckTag: typeof import('hicor-ui')['ElCheckTag']
    ElDescriptions: typeof import('hicor-ui')['ElDescriptions']
    ElDescriptionsItem: typeof import('hicor-ui')['ElDescriptionsItem']
    ElResult: typeof import('hicor-ui')['ElResult']
    ElSelectV2: typeof import('hicor-ui')['ElSelectV2']
    ElWatermark: typeof import('hicor-ui')['ElWatermark']
    // hicor ui
    ElTopMenu: typeof import('hicor-ui')['ElTopMenu']
    ElTitle: typeof import('hicor-ui')['ElTitle']
  }

  interface ComponentCustomProperties {
    $message: typeof import('hicor-ui')['ElMessage']
    $notify: typeof import('hicor-ui')['ElNotification']
    $msgbox: typeof import('hicor-ui')['ElMessageBox']
    $messageBox: typeof import('hicor-ui')['ElMessageBox']
    $alert: typeof import('hicor-ui')['ElMessageBox']['alert']
    $confirm: typeof import('hicor-ui')['ElMessageBox']['confirm']
    $prompt: typeof import('hicor-ui')['ElMessageBox']['prompt']
    $loading: typeof import('hicor-ui')['ElLoadingService']
  }
}

export {}
