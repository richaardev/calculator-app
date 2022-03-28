import { DefaultTheme } from "./theme";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    body {
        font-family: "Spartan", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
`;

export default GlobalStyle;
