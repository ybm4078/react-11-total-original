import type { DefaultTheme } from "styled-components";

export const LightTheme: DefaultTheme = {
    icon: "☀️",
    color: {
        background: "#FFF",
        text: "#111",
        primary: "#6C63FF",
        muted: "#f4f4f4",
    },
};

export const DarkTheme: DefaultTheme = {
    icon: "🌙",
    color: {
        background: "#111",
        text: "#FFF",
        primary: "#6C63FF",
        muted: "#222",
    },
};

export const redTheme: DefaultTheme = {
    icon: "🍎",
    color: {
        background: "#c2a1a1",
        text: "#000000",
        primary: "#6C63FF",
        muted: "#fe5151",
    },
};
