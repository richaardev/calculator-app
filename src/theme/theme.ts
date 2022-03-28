export interface DefaultTheme {
    id: number;
    backgrounds: {
        background: string;
        background1: string;
        background2: string;
    };
    keys: {
        key: string;
        key1: string;
        key2: string;
        key3: string;
        key4: string;
        key5: string;
    };
    text: {
        text1: string;
        text2: string;
        wtf: string | undefined;
    };
}

const Theme = {
    dark: {
        id: 0,
        backgrounds: {
            background: "hsl(222, 26%, 31%)",
            background1: "hsl(223, 31%, 20%)",
            background2: "hsl(224, 36%, 15%)",
        },
        keys: {
            key1: "hsl(225, 21%, 49%)",
            key2: "hsl(224, 28%, 35%)",
            key3: "hsl(6, 63%, 50%)",
            key4: "hsl(6, 70%, 34%)",
            key5: "hsl(30, 25%, 89%)",
            key6: "hsl(28, 16%, 65%)",
        },
        text: {
            text1: "hsl(221, 14%, 31%)",
            text2: "hsl(0, 0%, 100%)",
        },
    },
    light: {
        id: 1,
        backgrounds: {
            background: "hsl(0, 0%, 90%)",
            background1: "hsl(0, 5%, 81%)",
            background2: "hsl(0, 0%, 93%)",
        },
        keys: {
            key1: "hsl(185, 42%, 37%)",
            key2: "hsl(185, 58%, 25%)",
            key3: "hsl(25, 98%, 40%)",
            key4: "hsl(25, 99%, 27%)",
            key5: "hsl(45, 7%, 89%)",
            key6: "hsl(35, 11%, 61%)",
        },
        text: {
            text1: "hsl(60, 10%, 19%)",
            text2: "hsl(0, 0, 100%)",
        },
    },
    exausted: {
        id: 2,
        backgrounds: {
            background: "hsl(268, 75%, 9%)",
            background1: "hsl(268, 71%, 12%)",
            background2: "hsl(268, 71%, 12%)",
        },
        keys: {
            key1: "hsl(281, 89%, 26%)",
            key2: "hsl(285, 91%, 52%)",
            key3: "hsl(176, 100%, 44%)",
            key4: "hsl(177, 92%, 70%)",
            key5: " hsl(268, 47%, 21%)",
            key6: "hsl(290, 70%, 36%)",
        },
        text: {
            text1: "hsl(52, 100%, 62%)",
            text2: "hsl(52, 100%, 62%)",
            wtf: "hsl(198, 20%, 13%)",
        },
    },
};

export default Theme;
