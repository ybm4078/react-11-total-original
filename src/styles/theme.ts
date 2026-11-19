import type { DefaultTheme } from "styled-components";

export const LightTheme: DefaultTheme = {
    icon: "☀️",
    color: {
        background: "#f4f4f4",
        text: "#111",
        primary: "#6C63FF",
        muted: "#fff",
    },
};

export const DarkTheme: DefaultTheme = {
    icon: "🌙",
    color: {
        background: "#222",
        text: "#FFF",
        primary: "#6C63FF",
        muted: "#111",
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
