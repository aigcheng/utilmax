/**
 * 
 * @desc 时间戳转换为时间, 默认为当前时间转换结果,isMs为时间戳是否为毫秒
 * @param {number} timestamp 时间戳
 * @param {boolean} isMs 时间戳是否为毫秒
 * @returns {string} 时间
 */
export function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {
  const date = new Date(timestamp * (isMs ? 1 : 1000))
  return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}