import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Attributes'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Basics
      const attributesText = `You can add <em>attributes</em> to your tags!\nThey will <em fontStyle="italic">overwrite</em> the <em fill="#FF8822">values</em> for any existing <em fontFamily="Courier" fill="#FFFF00" fontWeight="400">tag styles</em>.`
      const attributesStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '24px',
          fill: '#cccccc',
          align: 'left',
        },
        em: {
          fill: '#4488FF',
          fontWeight: '700',
        },
      } satisfies TextStyleSet

      const attributes = new TaggedText(
        attributesText,
        attributesStyle,
        {},
      )

      createDemo('attributes', attributes)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='attributes' />
    </div>
  )
}

Page.displayName = name

export default Page
