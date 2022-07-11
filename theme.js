const colorCodes = {
    theme1: {
        mainbg: "hsl(222, 26%, 31%)",
        screenbg: "hsl(224, 36%, 15%)",
        padbg: "hsl(223, 31%, 20%)",
        key: "hsl(30, 25%, 89%)",
        skey: "hsl(225, 21%, 49%)",
        ekey: "hsl(6, 63%, 50%)",
        keyshadow: "hsl(28, 16%, 65%)",
        skeyshadow: "hsl(224, 28%, 35%)",
        ekeyshadow: "hsl(6, 70%, 34%)",
        keytxt: "hsl(221, 14%, 31%)",
        txt: "hsl(0, 0%, 100%)",
        ekeytxt: "hsl(0, 0%, 100%)",
        skeytxt: "hsl(0, 0%, 100%)",
    },
    theme2: {
        mainbg: "hsl(0, 0%, 90%)",
        screenbg: "hsl(0, 0%, 93%)",
        padbg: "hsl(0, 5%, 81%)",
        key: "hsl(45, 7%, 89%)",
        skey: "hsl(185, 42%, 37%)",
        ekey: "hsl(25, 98%, 40%)",
        keyshadow: "hsl(35, 11%, 61%)",
        skeyshadow: "hsl(185, 58%, 25%)",
        ekeyshadow: "hsl(25, 99%, 27%)",
        keytxt: "hsl(60, 10%, 19%)",
        txt: "hsl(0, 0%, 25%)",
        ekeytxt: "hsl(0, 0%, 100%)",
        skeytxt: "hsl(0, 0%, 100%)",
    },
    theme3: {
        mainbg: "hsl(268, 75%, 9%)",
        screenbg: "hsl(268, 71%, 12%)",
        padbg: "hsl(268, 71%, 12%)",
        key: "hsl(268, 47%, 21%)",
        skey: "hsl(281, 89%, 26%)",
        ekey: "hsl(176, 100%, 44%)",
        keyshadow: "hsl(290, 70%, 36%)",
        ekeyshadow: "hsl(177, 92%, 70%)",
        skeyshadow: "hsl(285, 91%, 52%)",
        keytxt: "hsl(52, 100%, 62%)",
        txt: "hsl(52, 100%, 62%)",
        ekeytxt: "hsl(198, 20%, 13%)",
        skeytxt: "hsl(0, 0%, 100%)",
    },

}

const themeIndicators = document.querySelectorAll(".theme_indicators .indicator");
const themeIndicatorBar = document.querySelector(".theme_indicators .selected");
const mainBg = document.querySelector(".mainbg");
const screenBg = document.querySelector(".screenbg");
const padbgs = document.querySelectorAll(".padbg");
const keybgs = document.querySelectorAll(".key");
const skeybgs = document.querySelectorAll(".skey");
const ekeybgs = document.querySelectorAll(".ekey");
const keyshadows = document.querySelectorAll(".keyshadow");
const skeyshadows = document.querySelectorAll(".skeyshadow");
const ekeyShadow = document.querySelector(".ekeyshadow");
const keytxts = document.querySelectorAll(".keytxt");
const txts = document.querySelectorAll(".txt");

let changeColorCode = (theme, index) => {
    let {
        mainbg,
        screenbg,
        padbg,
        key,
        ekey,
        skey,
        keyshadow,
        skeyshadow,
        ekeyshadow,
        keytxt,
        txt,
        skeytxt,
        ekeytxt
    } = colorCodes[theme];
    themeIndicatorBar.style.left = `${index * 20 + 2}px`;
    keybgs.forEach(bg => bg.style.backgroundColor = key);
    mainBg.style.backgroundColor = mainbg;
    screenBg.style.backgroundColor = screenbg;
    padbgs.forEach(bg => bg.style.backgroundColor = padbg);
    skeybgs.forEach(bg => bg.style.backgroundColor = skey);
    ekeybgs.forEach(bg => bg.style.backgroundColor = ekey);
    keyshadows.forEach(bg => bg.style.boxShadow = `0 4px ${keyshadow}`)
    skeyshadows.forEach(bg => bg.style.boxShadow = `0 4px ${skeyshadow}`)
    ekeyShadow.style.boxShadow = `0 4px ${ekeyshadow}`;
    txts.forEach(text => text.style.color = txt)
    keytxts.forEach(text => text.style.color = keytxt)
    skeybgs.forEach(text => text.style.color = skeytxt);
    ekeybgs.forEach(key => key.style.color = ekeytxt);
    calcDisplay.style.setProperty("--borderColor", txt);
    document.querySelectorAll(".attribution a").forEach(link => link.style.setProperty("--attrlink", keyshadow));
}

themeIndicators.forEach((indicator, index) => indicator.addEventListener("click", () => changeColorCode(`theme${index + 1}`, index)))