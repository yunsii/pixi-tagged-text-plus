import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Debug Mode'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Debug Mode
      const debugText = `
        You can use <blue>debug mode</blue> to help you figure out what your text is doing. Include <code>{debug: true} </code> in the options when you create your text.
              You can also set <code>debugConsole: true</code> if you want to log information about the text field to the console.
      `
      const debugStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '24px',
          fill: '#cccccc',
          wordWrap: true,
          wordWrapWidth: 500,
          valign: 'baseline',
        },
        blue: {
          fill: '#4488ff',
          stroke: '#2244cc',
          strokeThickness: 4,
        },
        code: {
          fontFamily: 'Courier',
          fontSize: '36px',
          fill: '#ff8888',
          stroke: '#660000',
          strokeThickness: 8,
        },
      } satisfies TextStyleSet

      const debug = new TaggedText(debugText, debugStyle, { debug: true })

      createDemo('debug', debug)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='debug' />
    </div>
  )
}

Page.displayName = name

export default Page
