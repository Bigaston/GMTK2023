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
        Button: "./img/ui/button.png",
        ButtonPressed: "./img/ui/buttonPressed.png",
        Panel: "./img/ui/panel.png",
        RedCross: "./img/ui/redCross.png",
        AudioOn: "./img/ui/audioOn.png",
        AudioOff: "./img/ui/audioOff.png",
        UIClick: "./sound/uiClick.ogg",
        BtnPressed: "./sound/btnPressed.ogg",
        BtnReleased: "./sound/btnReleased.ogg",
        Buzzer: "./sound/buzzer.ogg",
        Music: "./sound/music.mp3",
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
