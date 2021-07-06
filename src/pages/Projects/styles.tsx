import styled from 'styled-components';

import { themes } from '../../styles/themes';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
`;

export const ProjectGrid = styled.div`
    width: 100%;
    max-width: 1980px;
    height: 100%;
    max-height: 100vh;

    overflow-y: scroll;

    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
    padding: 1rem;
    place-content: start; 


    @media (min-width: 768px){
        place-content: start; 
        place-items: center;

        ::-webkit-scrollbar{
            width: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #383a59;
            border-radius: 4px;
        }
        
    }

    @media (min-width: 1024px){
        grid-template-columns: repeat(2, minmax(0, 1fr));

        ::-webkit-scrollbar{
            width: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #383a59;
            border-radius: 4px;
        }
    }

    @media (min-width: 1750px){
        grid-template-columns: repeat(3, minmax(0, 1fr));

        ::-webkit-scrollbar{
            width: 8px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #383a59;
            border-radius: 4px;
        }
    }

`

export const Project = styled.div`
    width: 100%;
    height: 130px;

    display: flex;
    justify-content: space-between;
    border: 2px solid ${themes.default.font.color.secondary};
    border-radius: 4px;

    img{
        border: 1px solid red;
        width: 250px;
        height: 100%;
    }

    @media (min-width: 768px){
        width: 600px;
        height: 200px;
        border-radius: 8px;
    }
`

export const ProjectDescription = styled.div`
    width: 100%;
    height: 100%;

    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #fff;
`

export const ProjectTitle = styled.div`
    color: #fff;

    font-size: 1.2rem;
    font-weight: 300;

    @media (min-width: 768px){
        font-size: 2rem;
        font-weight: 700;
    }
`

export const Description = styled.div`
    color: #fff;

    max-width: 80%;
    word-wrap: break-word;
    font-size: 0.8rem;
    font-weight: 100;

    a{
        text-decoration: none;
    }

    @media (min-width: 768px){
        font-size: 1rem;
        font-weight: 100;
    }
`

export const ProjectLink = styled.div`
    color: #fff;
`

export const ProjectPreview = styled.div`
    img{
        width: 130px;
        height: 100%;

        border-radius: 0 4px 4px 0;
    }

    @media (min-width: 768px){
        img{
            width: 250px;
            height: 100%;
        }
    }
`