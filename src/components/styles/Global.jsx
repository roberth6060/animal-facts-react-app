import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.animalImg{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: fill;

}
.animalImg2{
  object-fit: fill;
  border-radius: 10px;
}
  .animalImg:hover{
    transform: scale(1.05);
    transition: 1s;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: auto;
    min-height: 100%;
    height: 100%;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
 
`;

export default GlobalStyles;
