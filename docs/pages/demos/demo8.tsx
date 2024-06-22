import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Nesting Tags'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Nesting Tags
      const nestedText = `You can <outline>nest <b>tags <red>as <i>deeply <thicker>as you'd <large>like, <blue>dude!</blue></large></thicker></i></red></b></outline>`
      const nestedStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '24px',
          fill: '#cccccc',
          wordWrapWidth: 500,
          wordWrap: true,
          align: 'left',
          valign: 'baseline',
        },
        outline: { stroke: '#000000', strokeThickness: 2 },
        b: { fontWeight: '700' },
        red: { fill: '#ff8888' },
        blue: { fill: '#8888FF' },
        i: { fontStyle: 'italic' },
        thicker: { stroke: '#002266', strokeThickness: 10 },
        large: { fontSize: '36px' },
      } satisfies TextStyleSet
      const nested = new TaggedText(nestedText, nestedStyle)
      createDemo('nested', nested)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='nested' />
    </div>
  )
}

Page.displayName = name

export default Page
