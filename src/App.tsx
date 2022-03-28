import { CalculatorAppContainer, CalculatorHeader, CalculatorAnswer, CalculatorApp } from "./styles/style";
import { ThemeSwitcher, Theming, ThemeCounter } from "./styles/themer";
import { Keypad, KeypadButton, KeypadRow } from "./styles/keypad";
import { ThemeProvider } from "styled-components";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Theme from "./theme/theme";


// Então, pelo menos eu tentei...
const App = () => {
    const themes = ["dark", "light", "exausted"];
    const [themeIndex, setThemeIndex] = useState(0);
    const changeTheme = () => setThemeIndex((themeIndex + 1) % themes.length);

    const [expression, setExpression] = useState("0");
    const reset = () => setExpression("");
    const del = () => setExpression(expression.slice(0, -1));
    const _addKey = (e: MouseEvent<HTMLButtonElement>) => addKey((e.target as HTMLButtonElement).innerText);
    const addKey = (e: string) => {
        let num = parseInt(e);
        if (!isNaN(num)) {
            if (expression === "0") {
                setExpression(num.toString());
            } else {
                setExpression(expression + num.toString());
            }
        }

        if (expression !== "") {
            let operators = ["+", "-", "*", "/", "x", "."];
            let lastChar = expression[expression.length - 1];

            // vamos fazer a substituição do operador
            if (operators.includes(lastChar) && operators.includes(e)) {
                return setExpression(expression.slice(0, -1) + e);
            }
            switch (e) {
                case ".":
                    // gambiarra
                    let i = expression.length - 1;
                    let tem = false;
                    while (!operators.slice(0, -2).includes(expression[i]) && i >= 0) {
                        if (expression[i] === ".") {
                            tem = true;
                            break;
                        }
                        i--;
                    }
                    // - fim da gambiarra
                    if (!tem) setExpression(expression + ".");
                    break;
                case "+":
                    setExpression(expression + "+");
                    break;
                case "-":
                    setExpression(expression + "-");
                    break;
                case "x":
                    setExpression(expression + "*");
                    break;
                case "/":
                    setExpression(expression + "/");
                    break;
            }
        }
    };
    const getResult = () => {
        setExpression(eval(expression).toString());
    };

    return (
        // @ts-ignore
        <ThemeProvider theme={Theme[themes[themeIndex]]}>
            <CalculatorApp>
                <CalculatorAppContainer>
                    <CalculatorHeader>
                        <h2>calc</h2>
                        <Theming>
                            THEME
                            <ThemeSwitcher onClick={changeTheme} selectedTheme={themeIndex}>
                                <ThemeCounter>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                </ThemeCounter>
                            </ThemeSwitcher>
                        </Theming>
                    </CalculatorHeader>
                    <CalculatorAnswer>
                        {expression === "" ? "0" : expression.replaceAll("*", "x").replaceAll(".", ",")}
                    </CalculatorAnswer>
                    <Keypad>
                        <KeypadRow>
                            <KeypadButton onClick={_addKey}>7</KeypadButton>
                            <KeypadButton onClick={_addKey}>8</KeypadButton>
                            <KeypadButton onClick={_addKey}>9</KeypadButton>
                            <KeypadButton onClick={del} type={1}>
                                DEL
                            </KeypadButton>
                        </KeypadRow>
                        <KeypadRow>
                            <KeypadButton onClick={_addKey}>4</KeypadButton>
                            <KeypadButton onClick={_addKey}>5</KeypadButton>
                            <KeypadButton onClick={_addKey}>6</KeypadButton>
                            <KeypadButton onClick={_addKey}>+</KeypadButton>
                        </KeypadRow>
                        <KeypadRow>
                            <KeypadButton onClick={_addKey}>1</KeypadButton>
                            <KeypadButton onClick={_addKey}>2</KeypadButton>
                            <KeypadButton onClick={_addKey}>3</KeypadButton>
                            <KeypadButton onClick={_addKey}>-</KeypadButton>
                        </KeypadRow>
                        <KeypadRow>
                            <KeypadButton onClick={_addKey}>.</KeypadButton>
                            <KeypadButton onClick={_addKey}>0</KeypadButton>
                            <KeypadButton onClick={_addKey}>/</KeypadButton>
                            <KeypadButton onClick={_addKey}>x</KeypadButton>
                        </KeypadRow>
                        <KeypadRow>
                            <KeypadButton type={1} onClick={reset}>
                                RESET
                            </KeypadButton>
                            <KeypadButton onClick={getResult} type={2}>
                                =
                            </KeypadButton>
                        </KeypadRow>
                    </Keypad>
                </CalculatorAppContainer>
            </CalculatorApp>
        </ThemeProvider>
    );
};

export default App;
