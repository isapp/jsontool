export const isEmptyObject = (obj) => {
  return obj.toString() === '[object Object]' && Object.keys(obj).length === 0
}
