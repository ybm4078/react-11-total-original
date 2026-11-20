import type { DefaultTheme } from "styled-components";
import lightCarrick from "../img/img1.png";
import darkCarrick from "../img/img2.png";

export const LightTheme: DefaultTheme = {
    color: {
        background:
            'url("https://images.unsplash.com/vector-1794895355554-10e918c09e33?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")',
        text: "#111",
        sideText: "#666",
        primary: "#6C63FF",
        muted: "#fff",
        border: "#e3e3e3",
        carrick: `url(${lightCarrick})`,
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
    },
};

