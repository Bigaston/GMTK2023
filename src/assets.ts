import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
  bundles: [
    {
      name: "scene1",
      assets: {
        Tile: "/tile.png",
        Character: "/character.png",
      },
    },
  ],
};
