import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Inline images'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      const thinking = PIXI.Sprite.from(await PIXI.Assets.load('/icon.png'))
      const doot = PIXI.Sprite.from(await PIXI.Assets.load('/doot.png'))
      const url = await PIXI.Assets.load('/100.png')

      const imgText = `
        <h2>Inline Images!</h2>
  
        <img imgSrc="doot" imgDisplay="inline" /> <img imgSrc="thinking" imgDisplay="inline" />
  
        Make it an icon <thinking imgDisplay="icon" /> with <code>imgDisplay="icon"</code>!
  
        Control the icon size with <code>iconScale=</code> <thinking imgDisplay="icon" /><thinking imgDisplay="icon" iconScale="1.5" /><thinking imgDisplay="icon" iconScale="2" /><thinking imgDisplay="icon" iconScale="1.5" /><thinking imgDisplay="icon" />
  
        You can even load images from a URL <url /> (if you can figure out the CORS stuff!)
      `
      const imgStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '20px',
          fill: '#FFFFCC',
          align: 'center',
          lineSpacing: 0,
          valign: 'baseline',
          iconScale: 1,
        },
        h2: {
          fontSize: 36,
          fill: '#44CC99',
        },
        code: {
          fontFamily: 'monospace',
          color: '#66FF00',
        },
        img: {},
        doot: {},
        thinking: {},
        url: { imgDisplay: 'icon' },
      } as TextStyleSet

      const imgTaggedText = new TaggedText(imgText, imgStyle, {
        // debug: true,
        // debugConsole: true,
        // splitStyle: "characters",
        // splitStyle: "words",
        imgMap: { thinking, doot, url },
      })

      await createDemo('img', imgTaggedText)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>

      <div className='pixi' id='img' />
    </div>
  )
}

Page.displayName = name

export default Page
