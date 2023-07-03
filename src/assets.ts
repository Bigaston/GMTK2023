import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
  bundles: [
    {
      name: "bundleName",
      assets: {
        "Clampy the clamp": "./clampy.png",
        "another image": "./monster.png",
      },
    },
  ],
};
