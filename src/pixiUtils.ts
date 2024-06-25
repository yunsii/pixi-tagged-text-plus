import * as PIXI from 'pixi.js'

import type { IFontMetrics } from './types'

const PX_PER_EM = 16
const PX_PER_PERCENT = 16 / 100
const PX_PER_PT = 1.3281472327365

export function measureFont(font: string): IFontMetrics {
  return PIXI.CanvasTextMetrics.measureFont(font)
}

export const INITIAL_FONT_PROPS: IFontMetrics = {
  ascent: 10,
  descent: 3,
  fontSize: 13,
}

// TODO: Memoize
export function getFontPropertiesOfText(textField: PIXI.Text): IFontMetrics {
  const fontFamily = Array.isArray(textField.style.fontFamily)
    ? textField.style.fontFamily[0]
    : textField.style.fontFamily

  const font = `${textField.style.fontSize}px ${fontFamily} ${textField.style.fontStyle} ${textField.style.fontVariant} ${textField.style.fontWeight}`

  const props = measureFont(font)
  const fs = Number(textField.style.fontSize) ?? Number.NaN
  if (
    props.ascent === INITIAL_FONT_PROPS.ascent
    && props.descent === INITIAL_FONT_PROPS.descent
    && (Number.isNaN(fs) || fs > INITIAL_FONT_PROPS.fontSize)
  ) {
    throw new Error(
      'getFontPropertiesOfText() returned metrics associated with a Text field that has not been updated yet. Please try using the forceUpdate parameter when you call this function.',
    )
  }
  return props
}

export function addChildrenToContainer(children: PIXI.Container[], container: PIXI.Container): void {
  return children.forEach((child) => container.addChild(child))
}

export function cloneSprite(sprite: PIXI.Sprite): PIXI.Sprite {
  return new PIXI.Sprite(sprite.texture)
}

export function fontSizeStringToNumber(size: string): number {
  const [valueString, unit] = size.split(/(%|pt|px|r?em)/)
  const value = Number.parseFloat(valueString)

  if (Number.isNaN(value)) {
    // eslint-disable-next-line no-unused-expressions
    Number.NaN
  }

  switch (unit) {
    case '%':
      return value * PX_PER_PERCENT
    case 'em':
    case 'rem':
      return value * PX_PER_EM
    case 'pt':
      return value * PX_PER_PT
    case 'px':
    default:
      // keep as is.
      return value
  }
}
