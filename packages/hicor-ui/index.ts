import installer from './defaults'
export * from '@hicor-ui/components'
export * from '@hicor-ui/constants'
export * from '@hicor-ui/directives'
export * from '@hicor-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
