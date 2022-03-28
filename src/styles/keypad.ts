import styled from "styled-components";

export const Keypad = styled.div`
    margin-top: 15px;
    border-radius: 10px;
    padding: 10px 5px;
    background-color: ${({ theme }) => theme.backgrounds.background1};
    height: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        "."
        "."
        ".";
`;

export const KeypadRow = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    flex: 1 1 1 1;
`;
export const KeypadButton = styled.button<any>`
    border: none;

    width: 100%;
    font-weight: bolder;
    margin: 10px 7.5px;
    padding: 7.5px 15px;
    cursor: pointer;
    font-size: 32px;
    color: ${(props) => {
        switch (props.type) {
            case 1:
                return "#FFFFFF";
            case 2:
                return props.theme.text.wtf ?? "#FFFFFF";
            default:
                return props.theme.text.text1;
        }
    }};
    ${(props) => {
        if (props.type === 1) {
            return `
                background-color: ${props.theme.keys.key1};
                border-bottom: 5px solid ${props.theme.keys.key2};
                font-size: 20px;
                `;
        } else if (props.type === 2) {
            return `
                background-color: ${props.theme.keys.key3};
                border-bottom: 5px solid ${props.theme.keys.key4};
                `;
        } else {
            return `
                background-color: ${props.theme.keys.key5};
                border-bottom: 5px solid ${props.theme.keys.key6};
            `;
        }
    }}

    border-radius: 10px;
    display: inline-block;

    @media (max-width: 520px) {
        padding: auto;
        margin: 5px;
        font-size: 26px;

        ${(props) => {
            if (props.type === 1) return "font-size: 16px";
        }}
    }
`;
