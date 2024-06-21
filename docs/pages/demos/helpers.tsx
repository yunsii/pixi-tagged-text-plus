import * as PIXI from 'pixi.js'

import type TaggedText from 'pkg-name'

async function createPixiApp(
  id: string,
  width = 600,
  height = 600,
  backgroundColor = 0x333333,
) {
  PIXI.AbstractRenderer.defaultOptions.resolution = 2
  const app = new PIXI.Application()
  await app.init({
    width,
    height,
    backgroundColor,
  })
  document.getElementById(id)?.appendChild(app.view)

  return app
}

export async function createDemo(id: string, TaggedTextExample: TaggedText) {
  const app = await createPixiApp(id)

  if (TaggedTextExample !== undefined) {
    TaggedTextExample.x = 30
    TaggedTextExample.y = 30
    app.stage.addChild(TaggedTextExample)
  }

  return app
}
