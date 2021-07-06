import { ReactNode } from 'react';

import { Container } from './styles';

type AppProps = {
    theme: boolean;
    children: ReactNode;
}

const AppContainer = (props: AppProps) => {
    return (
        <Container theme={props.theme}>
            {props.children}
        </Container>
    );
}

export default AppContainer;