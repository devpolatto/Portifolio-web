import { ReactNode } from 'react';
import styled from 'styled-components';
import { themes } from '../../styles/themes';

interface HeaderStyledProps {
    theme: boolean;
    sidebarHidden?: boolean;
    children?: ReactNode;
}


export const HeaderStyled = styled.div<HeaderStyledProps>`
    width: 100%;

    position: fixed;
    top: 0;
    z-index: 1;

    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.theme === true
        ? themes.secondary.background
        : themes.default.background
    };

    button {

        z-index: 11;

        background: none;
        border: none;

        .hamburger .line{
            width: 35px;
            height: 5px;
            background-color: ${props => props.theme === true
        ? themes.default.background
        : themes.secondary.background
    };
            display: block;
            margin: 8px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }

        #hamburger-6.is-active{
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            -webkit-transition-delay: 0.6s;
            -o-transition-delay: 0.6s;
            transition-delay: 0.6s;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        #hamburger-6.is-active .line:nth-child(2){
            width: 0px;
        }

        #hamburger-6.is-active .line:nth-child(1),
        #hamburger-6.is-active .line:nth-child(3){
            -webkit-transition-delay: 0.3s;
            -o-transition-delay: 0.3s;
            transition-delay: 0.3s;
        }

        #hamburger-6.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px);
            -ms-transform: translateY(13px);
            -o-transform: translateY(13px);
            transform: translateY(13px);
        }

        #hamburger-6.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(90deg);
            -ms-transform: translateY(-13px) rotate(90deg);
            -o-transform: translateY(-13px) rotate(90deg);
            transform: translateY(-13px) rotate(90deg);
        }

        @media (min-width: 768px){
            display: none;
        }

    }


    @media (min-width: 768px) {
        padding: 1rem 1rem;

        justify-content: space-between;

    }

`;

export const Logo = styled.h2<HeaderStyledProps>`
    font-size: 1.5rem;
    line-height: 1rem;

    color: ${props => props.theme === true
        ? themes.default.background
        : themes.secondary.background
    };

    span{
        color: ${themes.default.font.color.secondary}
    }

    @media (min-width: 768px){
        font-size: 2rem;
    }
`

export const Nav = styled.nav<HeaderStyledProps>`
    height: 100%;
    width: ${props => props.sidebarHidden === true ? '0' : '80%'
    };

    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    padding-top: 60px;
    overflow-x: hidden;

    background-color: ${props => props.theme === true
        ? themes.secondary.background
        : themes.default.background

    };

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    transition: 0.6s;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;

        width: auto;
        padding: 0;
        position: relative;
        z-index: none;
    }
`

export const NavItems = styled.ul<HeaderStyledProps>`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    list-style: none;

    li{
        width: auto;
        margin-top: 0.5rem;

        display: flex;
        flex-direction: row;
        justify-content: center;

        a{
            font-family: 'Roboto';
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 2rem;
            padding: 0.75rem 1rem;

            text-decoration: none;
            text-transform: uppercase;

            position: relative;
            overflow:hidden;

            color: ${props => props.theme === true ? themes.default.background : themes.secondary.background};
            
            &:after{
                content: '';
                position: absolute;
                top: 40px;
                left: 50%;
                width: 0;
                height: 4px;
                background: ${themes.default.font.color.secondary};
                border-radius: 90px;
                transition: 0.5s;
            }

            &:hover{
                &:after{
                    width: 100%;
                    left: 0;
                }
            }
        }

        @media (min-width: 768px) {
            margin-top: 0;
        }
    }

    .checkbox{

        margin-top: 24px;

        input[type=checkbox]{
            height: 0;
            width: 0;
            visibility: hidden;
        }

        input{
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            background: linear-gradient(0deg, #a5a5a5, #717171);
            border-radius: 20px;
            box-shadow: inset 0 0 15px rgba(0,0,0,.5);
        }

        label{
            text-indent: -9999px;
            width: 80px;
            height: 30px;
            background: grey;
            display: block;
            border-radius: 100px;
            position: relative;

            &:after{
                content: '';
                position: absolute;
                top: 5px;
                left: 5px;
                width: 20px;
                height: 20px;
                background: #fff;
                border-radius: 90px;
                transition: 0.5s;
            }
        }

        input:checked + label {
        background: ${themes.default.font.color.tertiary};
        }

        input:checked + label:after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }
    }

    @media (min-width: 768px) {
        gap: 10px;
        flex-direction: row;

        .checkbox{
            margin-left: 1.75rem;
            margin-top: 0;
        }
    }
`