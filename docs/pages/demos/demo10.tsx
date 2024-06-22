import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Wrapping and Alignment'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Wrapping and Alignment
      const wrappingText = `Global word wrap and alignment properties are controlled by the "default" style, and can\'t be overridden by other styles.`
      const wrappingStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '24px',
          fill: '#CC6600',
          wordWrap: true,
          wordWrapWidth: 150,
          align: 'right',
        },
      } satisfies TextStyleSet
      const wrapping = new TaggedText(wrappingText, wrappingStyle, {})

      const nonWrappingText = `This one doesn't have \`wordWrap\` so it just keeps going and going and going off the edge!`
      const nonWrappingStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '17px',
          fill: '#669900',
          wordWrap: false,
          wordWrapWidth: 150,
          align: 'left',
        },
      } satisfies TextStyleSet
      const nonWrapping = new TaggedText(nonWrappingText, nonWrappingStyle)
      nonWrapping.x = 30
      nonWrapping.y = 330

      const app = await createDemo('wrapping', wrapping)
      app.stage.addChild(nonWrapping)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='wrapping' />
    </div>
  )
}

Page.displayName = name

export default Page
