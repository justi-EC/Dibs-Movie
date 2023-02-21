import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

*{
  box-sizing : border-box;

  a{
    text-decoration : none;
    color : inherit;
  }

  input, button {
    outline : none;
    border : none; 
    background-color : transparent;
  }

  button {
    padding : 0;
    cursor : pointer;
  }

  textarea {
    border : none;
    background-color : transparent;
    resize : none;
    outline : none;
  }
}
`;

export default GlobalStyle;
