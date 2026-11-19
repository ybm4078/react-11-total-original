import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        icon: string;
        color: {
            background: string;
            text: string;
            primary: string;
            muted: string;
        };
    }
}
