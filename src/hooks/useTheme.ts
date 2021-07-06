import { useContext } from 'react';

import { MyContextPage } from '../context/MyContext';

export function useTheme() {
    const { handleSetTheme, theme } = useContext(MyContextPage)

    return ({
        handleSetTheme,
        theme
    })
}