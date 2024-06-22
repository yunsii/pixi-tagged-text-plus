import React, { useState } from 'react'

import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import Demo9 from './demo9'
import Demo10 from './demo10'
import Demo11 from './demo11'
import Demo12 from './demo12'
import Demo13 from './demo13'
import Demo14 from './demo14'
import Demo15 from './demo15'
import Demo16 from './demo16'
import Demo17 from './demo17'

const demos = [
  Demo1,
  Demo2,
  Demo3,
  Demo4,
  Demo5,
  Demo6,
  Demo7,
  Demo8,
  Demo9,
  Demo10,
  Demo11,
  Demo12,
  Demo13,
  Demo14,
  Demo15,
  Demo16,
  Demo17,
]

export interface IDemosProps {}

const Demos: React.FC<IDemosProps> = (props) => {
  const [index, setIndex] = useState(0)

  const target = demos.find((_, itemIndex) => {
    return itemIndex === index
  })!

  return (
    <div>
      <div className='flex flex-wrap'>
        {demos.map((item, itemIndex) => {
          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={itemIndex}
              type='button'
              className={`border px-2 ${itemIndex === index ? 'bg-cyan-400' : ''}`}
              onClick={() => {
                setIndex(itemIndex)
              }}
            >
              {item.displayName || '-'}
            </button>
          )
        })}
      </div>
      <div className='my-2'>
        <button
          type='button'
          className='border px-2'
          onClick={() => {
            setIndex((index - 1 + demos.length) % demos.length)
          }}
        >
          Prev
        </button>
        <button
          type='button'
          className='border px-2'
          onClick={() => {
            setIndex((index + 1 + demos.length) % demos.length)
          }}
        >
          Next
        </button>
      </div>
      {React.createElement(target)}
    </div>
  )
}

export default Demos
