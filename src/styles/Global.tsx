import { createGlobalStyle } from 'styled-components';

import { themes } from './themes';

interface GlobalStyledProps {
    theme: boolean
}

export const GlobalStyled = createGlobalStyle<GlobalStyledProps>`

  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', 'Poppins', sans-serif;

        background-color: ${props => props.theme === true
        ? themes.secondary.background
        : themes.default.background};

        /* color: ${props => props.theme === true
        ? themes.secondary.font.color.primary
        : themes.default.font.color.primary}; */
    }
`;
