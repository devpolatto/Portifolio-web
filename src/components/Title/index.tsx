import React, { ReactNode } from 'react';

import { Container } from './styles';

import { useTheme } from '../../hooks/useTheme';

type TitleProps = {
    text: string;
    children?: ReactNode;
}

const Title = (props: TitleProps) => {

    const { theme } = useTheme()

    return (
        <Container theme={theme}>
            {props.text}
        </Container>
    );
}

export default Title;