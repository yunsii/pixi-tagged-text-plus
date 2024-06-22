import TaggedText from 'pkg-name'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pkg-name/types'

const name = 'Emoji'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      const emojiText = `
        <h2>🙆🏾‍♀️ EMOJI 🆗*</h2>
        <warning>*But unfortunately, will render differently on different browsers & OSes</warning>

        The 🏃‍♀️, 🟫, 🦊 jumps ⤵️ the 💤 🐶.

        <big>💯👯‍♂️🔥</big>

        <small>🐞🐛🕷🐜🐞🐛🕷🐜🐞🐛🕷🐜</small>
      `

      const emojiStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: 26,
          fill: '#FFFFCC',
          align: 'center',
          lineSpacing: 0,
          valign: 'baseline',
        },
        h2: {
          fontSize: 48,
          fontWeight: '700',
        },
        big: {
          fontSize: 150,
        },
        small: {
          fontSize: 24,
        },
        warning: {
          fontStyle: 'italic',
          fontSize: 14,
          fill: '#ff8888',
        },
        __EMOJI__: {
          fontSize: '100%',
        },
      } satisfies TextStyleSet

      const emojiTaggedText = new TaggedText(emojiText, emojiStyle, {
        wrapEmoji: true,
      })

      const emojiApp = await createDemo('emoji', emojiTaggedText)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='emoji' />
    </div>

  )
}

Page.displayName = name

export default Page
