import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --bgcolor-primary : #F5F5F5 ;
    --primary-black : #333333;

}

*,*::before,*::after{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
 }
 .controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  font-size: 12px;
}
`;

export default GlobalStyles;
