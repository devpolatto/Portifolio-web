import { createContext, useState, ReactNode } from 'react';

type MyContextPageType = {
    theme: boolean;
    handleSetTheme: () => void;
}

type MyContextPageProvider = {
    children: ReactNode;
}

export const MyContextPage = createContext({} as MyContextPageType)

export const MyContextPageProvider = (props: MyContextPageProvider) => {

    const [theme, setTheme] = useState(false)

    function handleSetTheme() {
        theme === false ? setTheme(true) : setTheme(false)
        console.log(theme)
    }

    return (
        <MyContextPage.Provider value={{ theme, handleSetTheme }}>
            {props.children}
        </MyContextPage.Provider>
    );
}