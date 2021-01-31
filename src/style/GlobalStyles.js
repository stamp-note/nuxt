import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

  :root {
    --color-main: #04aaff;
    --color-sub: #6b9ad6;
    --color-point: #76cfff;
    --color-background: #0f1323;
    --box-shadow:0px 0px 20px 10px rgba(72, 168, 246, 0.1);
    --letter-spacing: .1em;
    --line-height: 1.2em;
    --spacing: 20px;
    --spacing-wrap: 40px;
    --border-radius: 5px;
  }

  * {
    vertical-align: top;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    overflow-y: scroll;
  }


  body {
        font-family: 'Montserrat';
        font-size: 14px;
        font-weight: 500;
        background: var(--color-background);
    }

    html, body {
        width:100%;
    }

    strong {
        font-weight: 800;
    }

    a, button, input {
        font-family: 'Montserrat';
        font-weight: 500;
    }

    h1, h2, h3,
    h4, h5, h6 {
        font-weight:normal;
    }

    img {
        font-size: 100%;
        line-height: 100%;
        vertical-align: top;
    }

    ol, ul, li {
        list-style: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    caption {
        visibility: hidden;
        overflow: hidden;
        width: 0;
        height: 0;
        font-size: 0;
        line-height: 0;
    }

    button {
        background: #eee;
        outline: none;
    }

    input, textarea, select {
        font-size: 14px;
        background: transparent;
        outline: none;
    }

    input[type="submit"],
    button {
        cursor: pointer;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    textarea {
        vertical-align: middle;
    }
    
    address, i {
        font-style: normal;
    }

    ::-webkit-input-placeholder {
        color: #222;
    }

    :-moz-placeholder {
        color: #222;
    }

    ::-moz-placeholder {
        color: #222;
    }

    :-ms-input-placeholder {
        color: #222;
    }

    /* anchor */
    a {
        font-family: 'Montserrat';
        color: #000;
        text-decoration: none;
    }

    a:link,
    a:visited,
    a:hover,
    a:active,
    a:focus {
        text-decoration: none;
    }
    a[href^=tel] {
        text-decoration: inherit;
        color: inherit;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details,
    figcaption, figure, footer,
    header, hgroup, main,
    menu, nav, section, video{
        display: block;
    }

`;

export default GlobalStyles;
