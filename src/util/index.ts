export async function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

export function uint8(num: number) {
  num %= 256
  return Math.floor(num < 0 ? num + 256 : num)
}

export function toColorNum(rgba: [number, number, number, number]): number {
  let c = 0xFF & uint8(rgba[0])
  c = (c << 8) | 0xFF & uint8(rgba[1])
  c = (c << 8) | 0xFF & uint8(rgba[2])
  c = (c << 8) | 0xFF & uint8(rgba[3])
  return c
}

const hexDigits = '0123456789ABCDEF'
export function toColorStr(colorNum: number) {
  let s = ''
  for (let i = 0; i < 8; i++) {
    s = hexDigits[(colorNum & 0b1111)] + s
    colorNum >>= 4
  }
  return `#${s}`
}