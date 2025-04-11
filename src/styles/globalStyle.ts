import { createGlobalStyle } from "styled-components";
import { Theme } from '@/@types/theme';

export const GlobalStyle = createGlobalStyle<{theme: Theme}>`
   body, html {
     background: ${(props) => props.theme.appBackground};
     margin: 0;
     padding: 0;
     font-family: "Inter", sans-serif;
   }
   
   h1, h2, p, ul, li {
     margin: 0;
     padding: 0;
   }

`