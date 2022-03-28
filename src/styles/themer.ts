import styled from "styled-components";

export const Theming = styled.div`
    font-size: 10px;
    font-weight: 500;
`;
export const ThemeCounter = styled.div`
    display: flex;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: -15px;
    font-weight: 600;
    justify-content: space-between;
    padding: 0 7.5px;
`;
export const ThemeSwitcher = styled.div<any>`
    margin: 0 0 0 15px;
    width: 50px;
    height: 20px;
    display: inline-block;

    vertical-align: middle;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.backgrounds.background1};
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        top: 16%;

        /* 25 50 75 */
        left: ${(prop) =>
            prop.selectedTheme === 0
                ? "calc(25% - 7.5px)"
                : prop.selectedTheme === 1
                ? "calc(50% - 7.5px)"
                : "calc(75% - 7.5px)"};
        background-color: ${({ theme }) => theme.keys.key3};
        border-radius: 100%;
    }
    &:hover {
        cursor: pointer;
    }
`;