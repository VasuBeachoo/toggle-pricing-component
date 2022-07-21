import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Linear-gradient-first: hsl(236, 72%, 79%);
    --Linear-gradient-second: hsl(237, 63%, 64%);
    --Very-Light-Grayish-Blue: hsl(240, 78%, 98%);
    --Light-Grayish-Blue: hsl(234, 14%, 74%);
    --Grayish-Blue: hsl(233, 13%, 49%);
    --Dark-Grayish-Blue: hsl(232, 13%, 33%);

    --font: "Montserrat", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
