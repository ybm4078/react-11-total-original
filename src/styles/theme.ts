import type { DefaultTheme } from "styled-components";
import lightCarrick from "../img/img1.png";
import darkCarrick from "../img/img2.png";
import lightBg from "../img/bimg1.png";

export const LightTheme: DefaultTheme = {
    color: {
        background: `url(${lightBg})`,
        text: "#111",
        sideText: "#666",
        primary: "#6C63FF",
        muted: "#fff",
        border: "#e3e3e3",
        carrick: `url(${lightCarrick})`,
        gradient:
            'linear-gradient(95deg, #ffffff 20%, #ddf1f9 30%, #c7ecfc 40%,#bee4f7 60%, #83d9f9 80%, #58bcf5 100%)',
    },
};

export const DarkTheme: DefaultTheme = {
    color: {
        background:
            'url("https://images.unsplash.com/vector-1794707149885-0125aacfd866?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")',
        text: "#FFF",
        sideText: "#dbdbdb",
        primary: "#6C63FF",
        muted: "#111",
        border: "#3f3f3f",
        carrick: `url(${darkCarrick})`,
        gradient:
            "linear-gradient(95deg, #18191e 0%, #18191e 20%, #1d243b 40%, #233363 65%, #2a448f 80%, #3458c2 100%)",
    },
};
