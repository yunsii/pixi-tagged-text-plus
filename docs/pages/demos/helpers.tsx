import * as PIXI from 'pixi.js'

import type TaggedText from 'pkg-name'

function createPixiApp(
  id: string,
  width = 600,
  height = 600,
  backgroundColor = 0x333333,
) {
  PIXI.settings.RESOLUTION = 2
  const app = new PIXI.Application({ width, height, backgroundColor })
  app.view.style.width = `${width}px`
  app.view.style.height = `${height}px`
  document.getElementById(id)?.appendChild(app.view)

  return app
}

export function createDemo(id: string, TaggedTextExample: TaggedText) {
  const app = createPixiApp(id)

  if (TaggedTextExample !== undefined) {
    TaggedTextExample.x = 30
    TaggedTextExample.y = 30
    app.stage.addChild(TaggedTextExample)
  }

  return app
}
