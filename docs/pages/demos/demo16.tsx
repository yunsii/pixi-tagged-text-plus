import TaggedText from 'pkg-name'
import React, { useEffect } from 'react'

import { createDemo } from './helpers'

const name = 'Interaction Events'

const Page: React.FC = () => {
  useEffect(() => {
    const run = async () => {
      // Interaction Events
      const interactionTagged = new TaggedText(
        `If you enable <link name="interaction">interaction</link>, you can get <link name="information">information</link> about which <link name="tag">tag</link> corresponded to the <link name="event">event</link>.`,
        {
          default: {
            fontFamily: 'Arial',
            fontSize: '24px',
            fill: '#cccccc',
            wordWrap: true,
            wordWrapWidth: 500,
          },
          link: {
            fill: 0x4488FF,
            fontStyle: 'italic',
          },
        },
      )

      interactionTagged.text = 'Interactivity is not currently supported.'
      interactionTagged.interactive = true
      interactionTagged.on('pointerdown', (e) => {
        if (e.target !== undefined && e.target.name === 'link') {
          // eslint-disable-next-line no-console
          console.log(
            `You clicked on the link for "${e.target}"!`,
          )
        }
      })

      createDemo('interaction', interactionTagged)
    }

    run()
  }, [])

  return (
    <div className='example'>
      <div className='code'>
        <h2>{name}</h2>
        <pre><code className='js' /></pre>
      </div>
      <div className='pixi' id='interaction'>
        <script />
      </div>
    </div>
  )
}

Page.displayName = name

export default Page
