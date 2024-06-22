import TaggedText from 'pkg-name'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pkg-name/types'

const name = 'Animation'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Animation
      const animatedText
      = 'Now have fun making some\n<blue>B E A U T I F U L</blue>\n<red>multistyle</red>\ntext!'
      const animatedStyles = {
        default: {
          fontFamily: 'Recursive, Arial',
          fontSize: '48px',
          fontWeight: '900',
          fill: '#cccccc',
          strokeThickness: 1,
          stroke: '#aaaaaa',
          dropShadow: true,
          dropShadowBlur: 15,
          dropShadowDistance: 15,
          dropShadowAngle: 0,
          wordWrapWidth: 500,
          lineSpacing: 40,
          align: 'center',
        },
        blue: {
          fill: 0x4488FF,
          stroke: 0x2244CC,
          fontSize: 22,
        },
        red: { fill: 0xFF8888, stroke: 0xCC4444 },
      } satisfies TextStyleSet

      const animated = new TaggedText(animatedText, animatedStyles, {
        splitStyle: 'characters',
      })

      const app = await createDemo('animated', animated)

      // Animate
      const originalYPositions = animated.textFields.map((t) => t.y)
      let time = 0

      app.ticker.add((delta) => {
        time += delta
        for (let i = 0; i < animated.textFields.length; i++) {
          const text = animated.textFields[i]

          const amplitude = 5
          const frequency = 0.1
          const phaseOffsetPerLetter = 1

          text.y
        = originalYPositions[i]
        + Math.sin(time * frequency + i * phaseOffsetPerLetter)
        * amplitude
        }
      })
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='animated' />
    </div>
  )
}
Page.displayName = name
export default Page
