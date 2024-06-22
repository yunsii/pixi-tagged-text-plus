import TaggedText from 'pkg-name'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pkg-name/types'

const name = 'Underline, overline and Strikethru'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // underline
      const underlineText = `
        <h1>Underline, overline and strikethru:</h1>
        <code>textDecoration: "underline"</code>
        <underline>A cumque ea quia vel.</underline>

        <code>textDecoration: "overline"</code>
        <overline>Est labore quibusdam laborum facere.</overline>

        <code>textDecoration: "line-through"</code>
        <lineThrough>Veritatis aut ducimus occaecati illo.</lineThrough>

        <code>underlineThickness, underlineOffset, underlineColor</code>
        <underlineCustom>Est labore quibusdam laborum facere.</underlineCustom>

        <code>textDecoration: "underline overline"</code>
        <underOver>maiores fugiat quae voluptas eaque modi.</underOver>

        <code>nested tags (note, textDecoration will override in nested styles)</code>
        <overline><underlineCustom><purple>maiores fugiat quae voluptas eaque modi.</purple></underlineCustom></overline>

        <code>multiple custom decorations</code>
        <custom>consequuntur odit in excepturi perspiciatis dolores commodi aliquam exercitationem at</custom>
      `

      const underlineStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '22px',
          align: 'center',
        },
        h1: { fill: '#CCCCCC' },
        code: { fontFamily: 'courier', fontSize: 12, fill: '#FFFFFF' },
        purple: { fill: '#6600FF' },
        underline: { textDecoration: 'underline', fill: '#FF0000' },
        overline: { textDecoration: 'overline', fill: '#FFFF00' },
        lineThrough: { textDecoration: 'line-through', fill: '#0066FF' },
        underOver: {
          textDecoration: 'underline overline',
          fill: '#FF9900',
        },
        underlineCustom: {
          underlineThickness: 3,
          underlineOffset: 4,
          underlineColor: '#FF00FF',
          fill: '#66FF66',
        },
        custom: {
          fill: '#FFCCFF',
          textStyle: 'italic',
          underlineThickness: 4,
          underlineColor: '#FFFF00',
          underlineOffset: 5,
          overlineColor: '#00FFFF',
          overlineThickness: 4,
          overlineOffset: -3,
          lineThroughThickness: 2,
          lineThroughColor: '#FF0000',
        },
      } satisfies TextStyleSet

      const underline = new TaggedText(underlineText, underlineStyle, {
        // When using text decoration, it's recommended you use drawWhitespace: true
        // so that spaces will have underlines.
        drawWhitespace: true,

        // When overdrawDecorations is set,
        // the width of the decorations is extended by this amount on either side.
        overdrawDecorations: 2,
      })

      createDemo('underline', underline)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='underline' />
    </div>
  )
}

Page.displayName = name

export default Page
