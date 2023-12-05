import { utoa } from '../utils'

const MAIN_FILE_NAME = 'App.vue'

export const usePlayground = (source: string) => {
  const code = decodeURIComponent(source)
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = utoa(JSON.stringify(originCode))
  const isPreview = location.host.startsWith('preview')
  let link = `https://hicor-ui.run/#${encoded}`
  if (isPreview) {
    const pr = location.host.split('-', 2)[1]
    link = `https://hicor-ui.run/?pr=${pr}#${encoded}`
  }
  return {
    encoded,
    link,
  }
}
