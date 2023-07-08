import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
  bundles: [
    {
      name: "main",
      assets: {
        Belanosima: "./Belanosima.ttf",
        Roboto: "./Roboto.ttf",
        Heart: "./img/heart.png",
        BrokenHeart: "./img/broken-heart.png",
        Checkbox: "./img/ui/checkbox.png",
        CheckboxChecked: "./img/ui/checkboxChecked.png",
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
