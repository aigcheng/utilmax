import { default as inBrowser } from './inBrowser'

let yes!: boolean

/**
 * 检查是否在 Android 设备中。
 * @returns {boolean}
 */
const inAndroid = () => {
  if (yes == null) {
      yes =
        inBrowser() &&
        typeof window.navigator === 'object' &&
        /Android/i.test(window.navigator.userAgent || '')
  }
  return yes
}

export default inAndroid