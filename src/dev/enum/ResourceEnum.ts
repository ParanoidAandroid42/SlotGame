namespace Dev.Enum {

    /**
     * Resource listener
     */
    export enum ResourceListener  {
        AssetLoadCompleted = "AssetLoadCompleted",
        AssetLoading = "AssetLoading",
        AddTextures = "AddTextures",
        AddSounds = "AddSounds",
        AddSpines = "AddSpines",
        AddWebFonts = "AddWebFonts",
        AddPreTextures = "AddPreTextures",
        AssetPreLoadCompleted = "AssetPreLoadCompleted"
    }
    
    /**
     * Spine animation
     */
    export enum SpineAnimation {
    }

    /**
     * Web font
     */
    export enum WebFont {
        LuckiestGuy = "Luckiest Guy",
        BOB = "BoB",
        FontUrl = "assets/fonts/stylesheet.css"
    }

    /**
     * Pre texture
     */
    export enum PreTexture {
        Logo = "assets/gfx/Background/logo.png"
    }

    /**
     * Texture
     */
    export enum Texture {
        SevenSymbol = "assets/gfx/Symbols/7.png",
        BarSymbol = "assets/gfx/Symbols/BAR.png",
        Bar2xSymbol = "assets/gfx/Symbols/2xBAR.png",
        Bar3xSymbol = "assets/gfx/Symbols/3xBAR.png",
        CherrySymbol = "assets/gfx/Symbols/Cherry.png",
        SpinOut = "assets/gfx/Buttons/Spin.png",
        SpinOver = "assets/gfx/Buttons/SpinOver.png",
        SpinDisabled ="assets/gfx/Buttons/SpinDisabled.png",
        StopOut = "assets/gfx/Buttons/SpinStop.png",
        StopOver = "assets/gfx/Buttons/SpinStopOver.png",
        StopDisabled ="assets/gfx/Buttons/SpinStopDisabled.png",
        Bg = "assets/gfx/Background/bg.jpg",
        UIRefBg = "assets/gfx/Background/ui_ref.png",
        Frame = "assets/gfx/Background/frame.png"
    }
}