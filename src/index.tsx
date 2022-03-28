import { StrictMode } from "react";
import { render } from "react-dom";
import GlobalStyle from "./theme/globalstyle";
import App from "./App";
import Theme from "./theme/theme";

render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>,
    document.getElementById("root"),
);
