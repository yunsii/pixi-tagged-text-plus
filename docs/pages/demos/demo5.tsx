import TaggedText from 'pkg-name'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pkg-name/types'

const name = 'Text transformations and variations'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // textTransform
      const textTransformText = `
        <h1>Text transformations:</h1>
        <code>textTransform: "lowercase"</code>
        <lower>lowerCASE text</lower>
        <code>textTransform: "uppercase"</code>
        <upper>upperCASE text</upper>
        <code>textTransform: "capitalize"</code>
        <capitalize>capitalized text</capitalize>
        <code>fontVariant: "small-caps"</code>
        <smallcaps>Small Caps</smallcaps>
      `
      const textTransformStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '24px',
          fill: '#FFCC22',
          align: 'center',
        },
        h1: { fontSize: '36px', fill: '#CCCCCC' },
        code: { fontFamily: 'courier', fontSize: 12, fill: '#FFFFFF' },
        upper: { textTransform: 'uppercase' },
        lower: { textTransform: 'lowercase' },
        capitalize: { textTransform: 'capitalize' },
        smallcaps: { fontVariant: 'small-caps' },
      } satisfies TextStyleSet

      const textTransform = new TaggedText(
        textTransformText,
        textTransformStyle,
      )

      createDemo('textTransform', textTransform)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='textTransform' />
    </div>
  )
}

Page.displayName = name

export default Page
