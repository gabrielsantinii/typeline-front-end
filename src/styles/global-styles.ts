import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   /* @import url("https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
   */
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Poppins', sans-serif;
        ::-webkit-scrollbar {
        display: none;
        }

        &::selection {
            background: #ff79c6;
            color: #f8f8f2;
        }

        &::-moz-selection {
            background: #ff79c6;
            color: #f8f8f2;
        }
    }

    body, #root {
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
        min-width: 100vw;
        max-width: 100vw;
        background-color:#282a36;
        overflow-x: hidden;
    }

    button {
        outline: 0;
        border: none;
        display: block;
    }

    input {
        outline: 0;
        border: none;
        padding-left: 23px;
        
        font-size: var(--default-font);
        
    }

    a, label, p, button, input, span {
        font-weight: 500;
        font-size: 15px;
        caret-color: #ff79c6;
        
    }

    h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
        font-weight: 700;
    }

    h1, h2 {
        
    }

    h1 {
    
        font-size: 42px;
        line-height: 42px;

        @media (min-width: 1150px) {
            font-size: 58px;
            line-height: 58px;
        }
    }

    h2 {
        font-size: 36px;
        line-height: 36px;
    }

    h3 {
        
        font-size: 18px;
        line-height: 18px;
        font-weight: 700;
    }

    h4 {
        font-size: var(--default-font);
        line-height: var(--default-font);
        
    }

    p {
        font-size: var(--default-font);
        line-height: var(--default-font);
        
        font-size: 25px;
    }

    span {
        
    }

    a {
        text-decoration: none;
        cursor: pointer;
        transition: 180ms all;
        &:hover {
            transform: scale(1.06);
            filter: brightness(0.2);
        }
    }
`;
