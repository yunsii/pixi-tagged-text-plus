import * as PIXI from 'pixi.js'

import type TaggedText from 'pixi-tagged-text-plus'

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
  app.canvas.style.width = `${width}px`
  app.canvas.style.height = `${height}px`
  const container = document.getElementById(id)
  if (container && !container.querySelector('canvas')) {
    container.appendChild(app.canvas)
  }

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
