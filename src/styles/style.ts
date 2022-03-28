import styled from "styled-components";

export const CalculatorApp = styled.div`
    display: flex;
    @media (min-width: 520px) {
        justify-content: center;
        align-items: center;
    }
    /* height: 100vh;
    max-height: 100vh; */
    padding: 10px 20px;

    position:absolute;
    height: 100vh;
    right: 0;
    left: 0;
    width: auto;
    background-color: ${({ theme }) => theme.backgrounds.background};
    color: ${({ theme }) => theme.text.text2};
`;
export const CalculatorAppContainer = styled.div`
    user-select: none;
    width: 420px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    @media (max-width: 520px) {
        width: 100%;
        height: 95%;
    }
`;

export const CalculatorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CalculatorAnswer = styled.div`
    display: block;
    text-align: right;
    background-color: ${({ theme }) => theme.backgrounds.background2};
    font-size: 32px;
    padding: 25px;
    border-radius: 10px;
    font-weight: bold;
`;
