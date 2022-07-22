import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Light-Violet: hsl(236, 72%, 79%);
    --Violet: hsl(237, 63%, 64%);
    --Very-Light-Grayish-Blue: hsl(240, 78%, 98%);
    --Light-Grayish-Blue: hsl(234, 14%, 74%);
    --Grayish-Blue: hsl(233, 13%, 49%);
    --Dark-Grayish-Blue: hsl(232, 13%, 33%);
    --White: hsl(0, 0%, 100%);

    --font: "Montserrat", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--Very-Light-Grayish-Blue);
    font-family: var(--font);
    font-weight: 700;
    margin: 0;
  }
`;

export default GlobalStyle;
