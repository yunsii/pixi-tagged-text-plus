import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Vertical Alignment'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Vertical Alignment
      const valignText = `
        <top><code>Top</code> <small>Vertical</small> <img/> Alignment.</top>

        <middle><code>Middle</code> <small>Vertical</small> <img /> Alignment.</middle>

        <bottom><code>Bottom</code> <small>Vertical</small> <img/> Alignment.</bottom>

        <baseline><code>Baseline</code> <small>Vertical</small> <img/> Alignment.</baseline>
      `

      const valignStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '24px',
          fill: '#cccccc',
          align: 'left',
          // valign: "baseline",
        },
        code: {
          fontFamily: 'Courier',
          fontSize: '36px',
          fill: '#ff8888',
        },
        small: { fontSize: '14px' },
        top: { valign: 'top' },
        middle: { valign: 'middle' },
        bottom: { valign: 'bottom' },
        baseline: { valign: 'baseline' },
        img: { imgSrc: 'valignImg', imgDisplay: 'icon' },
      } satisfies TextStyleSet

      const valignImg = PIXI.Sprite.from(await PIXI.Assets.load('/icon.png'))

      const valign = new TaggedText(valignText, valignStyle, {
        imgMap: { valignImg },
      })
      createDemo('valign', valign)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='valign' />
    </div>
  )
}

Page.displayName = name

export default Page
