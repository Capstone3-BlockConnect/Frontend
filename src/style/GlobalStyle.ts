import { mediaQuaries } from "./mediaQuaries";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // 적용시킬 css 입력
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 20px;
        vertical-align: baseline;
        
        @media (max-width: ${mediaQuaries.DESKTOP}px ) {
            font-size: 15px;
        }

        @media (max-width: ${mediaQuaries.TABLET}px ) {
            font-size: 13px;
        }

        @media (max-width: ${mediaQuaries.MOBILE}px ) {
            font-size: 10px;
        }
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #F6F9F0;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
