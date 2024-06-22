import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'BreakLines'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // BreakLines

      // prettier-ignore
      const breakLinesText = `
        <h1>Using breakLines</h1>
        (red text has style \`breakLines:false\`)

        Really long normal text that breaks to the next line.

        Normal text + <nobreak>Text that doesn't break.</nobreak>

        Longer normal text + <nobreak>Text that doesn't break (wraps line)</nobreak>

        <nobreak>Really long text that doesn't break but is too long for the line?</nobreak>

        <nobreak>Nobreak text that has
        an explicit line break in the middle.</nobreak>

        <nobreak>Long Nobreak text that extends too far with a <nested>nested breaking text tag</nested> in the middle.</nobreak>
      `
      const breakLinesStyle = {
        default: {
          fontSize: '20px',
          fill: '#cccccc',
          wordWrapWidth: 500,
          wordWrap: true,
          breakLines: true,
          fontFamily: 'monospace',
        },
        h1: {
          fontWeight: '700',
          fontSize: 40,
        },
        nobreak: {
          breakLines: false,
          color: '#ff8888',
        },
        nested: {
          breakLines: true,
          color: '#8888ff',
        },
      } satisfies TextStyleSet

      const breakLines = new TaggedText(breakLinesText, breakLinesStyle, {})

      createDemo('breakLines', breakLines)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='breakLines' />
    </div>
  )
}

Page.displayName = name

export default Page
