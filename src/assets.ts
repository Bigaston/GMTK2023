import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
  bundles: [
    {
      name: "main",
      assets: {
        Caprasimo: "./Caprasimo.ttf",
        Heart: "./img/heart.png",
        BrokenHeart: "./img/broken-heart.png",
      },
    },
    {
      name: "level1",
      assets: {
        Profile_Benguigui: "./img/profiles/benguigui.jpg",
      },
    },
  ],
};
