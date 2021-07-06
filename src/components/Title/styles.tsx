import styled from 'styled-components';

import { themes } from '../../styles/themes';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 0;

  font-size: 1.75rem;
  font-weight: 600;
  color: ${props => props.theme === true ? themes.default.background : themes.default.font.color.secondary};

  @media (min-width: 768px){
    font-size: 3rem;
    padding: 16px 0;
  }
`;

