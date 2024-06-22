import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Spacing'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Spacing
      const spacingText
      = 'You can <narrow>set line and letter spacing</narrow> to <wide>give your text some drama.</wide>\nNote that lineSpacing can only be set on the default style.'
      const spacingStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '24px',
          fill: '#cccccc',
          lineSpacing: 30,
          letterSpacing: 0,
          wordWrap: true,
          wordWrapWidth: 500,
        },
        narrow: {
          fill: '#FFCC00',
          letterSpacing: -2,
        },
        wide: {
          fill: '#CCFF00',
          letterSpacing: 10,
        },
      } satisfies TextStyleSet
      const spacing = new TaggedText(spacingText, spacingStyle)

      createDemo('spacing', spacing)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='spacing' />
    </div>
  )
}

Page.displayName = name

export default Page
