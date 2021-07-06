import { ReactNode } from 'react';
import styled from 'styled-components';
import { themes } from '../../styles/themes';


interface HomeProps {
  theme: boolean;
  children: ReactNode;
}

export const Cover = styled.div<HomeProps>`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* padding-top: 90px; */

    z-index: 0;  

    .title{
      display: flex;
      justify-content: center;

      width: 100%;
      /* flex: 1; */
      .content{

        font-style: italic;

        div:nth-child(3){
          margin-left: 32px;
        }
      }

      .hello{
        line-height: 1rem;
        color: ${props => props.theme === true ? themes.default.background : themes.secondary.background};
      }

      .name{
        font-size: 3rem;
        font-family: 'Roboto';
        font-weight: 700;
        line-height: 3rem;
        color: ${props => props.theme === true ? themes.default.font.color.quaternary
    : themes.default.font.color.secondary};
      }

      .office{
        line-height: 1rem;
        color: ${props => props.theme === true ? themes.default.background : themes.secondary.background};
      }

      .office span{
        color: ${props => props.theme === true ? themes.default.font.color.quaternary
    : themes.default.font.color.secondary};
      }
      .office:nth-child(2){
        margin-left: 8px;
      }

    }

    .lottie{
      display: flex;
      width: 100%;
      /* flex: 1 */

      pointer-events: none;
    }

    @media (min-width: 768px){
      flex-direction: row;
      /* gap: 3rem; */

      .title{

        .content{
          div:nth-child(2){
            margin-top: 16px;
          }
          div:nth-child(3){
            margin-left: 52px;
          }
        }

        flex: 1;

        .hello{
          font-size: ${themes.default.font.xl}
        }

        .name{
          font-size: 7rem;
          line-height: 100%;
          font-weight: 900;
        }

        .office{
          font-size: ${themes.default.font.xl};
          line-height: 2rem;
        }
      }

      .lottie{
        width: auto;
        flex: 1;
      }

    }
`;

export const AboutMe = styled.div<HomeProps>`
    width: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    .content{
        width: 100%;
        height:auto;

        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        align-items: center;
        
        padding: 1rem 0.5rem; 
        img{
            width: 9rem;
            padding: 16px 0;
        }

        .about-me-description{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            font-size: ${themes.default.font.sm};
            font-family: 'Poppins', 'Roboto' sans-serif;
            color: ${props => props.theme === true ? themes.default.background : themes.secondary.background};
            text-align: left;

            button{
            border: 2px solid ${props => props.theme === true ? themes.default.font.color.primary : themes.default.font.color.secondary};
            background: ${props => props.theme === true ? themes.default.font.color.secondary : 'transparent'};
            color: ${props => props.theme === true ? themes.secondary.font.color : themes.default.font.color.primary};
            border-radius: 4px;
            padding: 0.7rem;
            margin-top: 24px;
            }
        }

        @media (min-width: 768px){
            flex-direction: row;
            justify-content: center;
            align-items: center;

            padding: 0;

            max-width: 1600px;

            .avatar-img{
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;

                img{
                    width: 20rem;
                    padding: 0;
                }
            }

            .about-me-description{
            display: flex;
            gap: 16px;
            align-items: flex-start;
            flex: 1;
            font-size: ${themes.default.font.xl};
            font-family: 'Poppins', 'Roboto' sans-serif;
            color: ${props => props.theme === true ? themes.default.background : themes.secondary.background};

                button{
                    border-width: 4px; 
                    border-radius: 8px;
                    font-size: 1.5rem;
                    padding: 0.8rem 1rem;
                }
            }
        }
    }

    @media (min-width: 768px){
        justify-content: space-around;
        align-items: center;
        height: 50vh;
    }

`