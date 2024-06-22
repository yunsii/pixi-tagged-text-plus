import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'adjustFontBaselines'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // adjustFontBaselines
      const adjustFontBaselineText = `
        If you need to, you can manually adjust where the font sits on the baseline.
              You can use pixel values...
              <beep fontSize="10">beep</beep> <beep fontSize="20">beep</beep> <beep fontSize="30">beep</beep> <beep fontSize="40">beep</beep> <beep fontSize="50">beep</beep> +20px
              <baap fontSize="10">baap</baap> <baap fontSize="20">baap</baap> <baap fontSize="30">baap</baap> <baap fontSize="40">baap</baap> <baap fontSize="50">baap</baap> -10px
      
              ...or percentages (of the ascender height)
              <boop fontSize="10">boop</boop> <boop fontSize="20">boop</boop> <boop fontSize="30">boop</boop> <boop fontSize="40">boop</boop> <boop fontSize="50">boop</boop> +100%
      
              This is designed to help with fonts which don't align correctly with the baseline so rather than being a style property, it's a mapping of font-family values to their offsets as part of the options object.
      `

      const adjustFontBaselineStyle = {
        default: {
          fontSize: '18px',
          fill: '#FFFFFF',
          align: 'center',
          paragraphSpacing: 20,
        },
        beep: {
          fill: '#FFFF33',
          fontFamily: 'Courier New',
        },
        baap: {
          fill: '#FF9966',
          fontFamily: 'Courier',
        },
        boop: {
          fill: '#33FFFF',
          fontFamily: 'Georgia',
        },
      }satisfies TextStyleSet

      const adjustFontBaseline = new TaggedText(
        adjustFontBaselineText,
        adjustFontBaselineStyle,
        {
          debug: true,
          adjustFontBaseline: {
            'Courier New': 20,
            'Courier': -10,
            'Georgia': '100%',
          },
        },
      )

      createDemo('adjustFontBaseline', adjustFontBaseline)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>

      <div className='pixi' id='adjustFontBaseline' />
    </div>
  )
}

Page.displayName = name

export default Page
