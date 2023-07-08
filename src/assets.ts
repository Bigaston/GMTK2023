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
      name: "profiles",
      assets: {
        Profile_Benguigui: "./img/profiles/benguigui.jpg",
        Profile_1: "./img/profiles/1.jpg",
        Profile_2: "./img/profiles/2.jpg",
        Profile_3: "./img/profiles/3.jpg",
        Profile_6: "./img/profiles/6.jpg",
        Profile_7: "./img/profiles/7.jpg",
        Profile_11: "./img/profiles/11.jpg",
        Profile_14: "./img/profiles/14.jpg",
        Profile_17: "./img/profiles/17.jpg",
        Profile_20: "./img/profiles/20.jpg",
      },
    },
  ],
};
