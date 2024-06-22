import TaggedText from 'pixi-tagged-text-plus'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

import type { TextStyleSet } from 'pixi-tagged-text-plus/types'

const name = 'Wrapping and Alignment II - breakWords'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      const breakWordsText = `
        Use <code>splitStyle: "characters"</code> and <code>breakWords: true</code> to allow line breaks between characters. Can be useful for languages such as chinese.

        <big>Selbstständigkeitserklärung</big>

        全局设置的<blue>对齐</blue>属性由「默认」来<big>控制</big>。而且不能被<blue>别的样式</blue>所<red>覆盖</red>。
      `
      const breakWordsStyle = {
        default: {
          fontFamily: 'Arial',
          fontSize: '16px',
          fill: '#cccccc',
          wordWrap: true,
          wordWrapWidth: 260,
        },
        code: { fontFamily: 'Courier' },
        blue: {
          fill: 0x4488FF,
          stroke: 0x2244CC,
          fontSize: '24px',
          breakWords: true,
        },
        red: { fill: 0xFF8888, stroke: 0xCC4444, breakWords: true },
        big: {
          fill: 0x88FF88,
          stroke: 0x44CC44,
          fontSize: '36px',
          breakWords: true,
        },
      } satisfies TextStyleSet
      const breakWordsOptions = {
        // debug: true,
        // splitStyle: "characters",
      } satisfies TextStyleSet
      createDemo(
        'breakWords',
        new TaggedText(breakWordsText, breakWordsStyle, breakWordsOptions),
      )
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
      </div>
      <div className='pixi' id='breakWords' />
    </div>
  )
}

Page.displayName = name

export default Page
