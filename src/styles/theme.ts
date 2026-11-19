import type { DefaultTheme } from "styled-components";

export const LightTheme: DefaultTheme = {
    icon: "☀️",
    color: {
        background: "#f4f4f4",
        text: "#111",
        sideText: "#666",
        primary: "#6C63FF",
        muted: "#fff",
        border: "#e3e3e3",
    },
};

export const DarkTheme: DefaultTheme = {
    icon: "🌙",
    color: {
        background: "#222",
        text: "#FFF",
        sideText: "#dbdbdb",
        primary: "#6C63FF",
        muted: "#111",
        border: "#3f3f3f",
    },
};

