import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            background: string;
            text: string;
            sideText: string;
            primary: string;
            muted: string;
            border: string;
            carrick: string;
            gradient: string;
        };
    }
}
