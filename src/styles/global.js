import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  :root {
    /* Primary colors */
    --brand-green: #00856F;
    --brand-green-light: #DCE9E2;
    --brand-green-light-02: #F7F9F9;
    --brand-beige: #FFFAF1;
    --brand-green-hover: #00453A;

    /* Secondary Colors */
    --gray-headline: #212529;
    --gray-paragraph: #495057;
    --white: #ffffff;

    /* Desktop Font sizes */
    --font-xs: 400 0.875rem/1.139rem 'DM Sans', sans-serif;
    --font-s: 400 1rem/1.5rem 'DM Sans', sans-serif;
    --font-m: 400 1.125rem/1.688rem 'DM Sans', sans-serif;
    --font-l: 700 1.5rem/1.938rem 'DM Sans', sans-serif;
    --font-xl: 700 2.5rem/3.25rem 'DM Sans', sans-serif;
    --font-xxl: 700 3rem/3.875rem 'DM Sans', sans-serif;
  }

  body {
    font: var(--font-s);
    color: var(--gray-paragraph);
    background: var(--brand-green-light);
    position: relative;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
