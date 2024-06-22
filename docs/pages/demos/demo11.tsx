import TaggedText from 'pkg-name'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pkg-name/types'

const name = 'Font scaling'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Font scaling
      const fontScalingText = `
        You can change the scaling of the font:

        <b>fontScaleWidth:</b>
        75% = <condensed>narrow / condensed</condensed>
        125% = <extended>wide / extended</extended>
        250% = <superExtended>super extended</superExtended>

        <b>fontScaleHeight:</b>
        75% = <short>short</short>
        125% = <tall>tall</tall>
        250% = <superTall>super tall</superTall>
      `
      const fontScalingStyle = {
        default: {
          fontFamily: 'arial',
          fontSize: 30,
          valign: 'baseline',
          fill: '#FFFFFF',
        },
        b: {
          fontWeight: '700',
          fontFamily: 'courier',
        },
        condensed: {
          fontScaleWidth: 0.75,
          fill: '#FF8899',
          fontFamily: 'georgia',
        },
        extended: {
          fontScaleWidth: 1.25,
          fill: '#9988FF',
          fontFamily: 'georgia',
        },
        superExtended: {
          fontScaleWidth: 2.5,
          fill: '#2266FF',
          fontFamily: 'georgia',
        },
        tall: {
          fontScaleHeight: 1.25,
          fill: '#88FF99',
          fontFamily: 'georgia',
        },
        short: {
          fontScaleHeight: 0.75,
          fill: '#FFFF33',
          fontFamily: 'georgia',
        },
        superTall: {
          fontScaleHeight: 2.5,
          fill: '#FF8866',
          fontFamily: 'georgia',
        },
      } satisfies TextStyleSet
      const fontScaling = new TaggedText(fontScalingText, fontScalingStyle)

      createDemo('fontScaling', fontScaling)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='fontScaling' />
    </div>
  )
}

Page.displayName = name

export default Page
