import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
  h1 { 
    font-size: 100px;
    margin: 0px;
  }
  h2 { 
    font-size: 50px;
    margin: 0px;
  }
  h3 {
    font-size: 40px;
    margin: 0px;
  }
  h4 { 
    font-size: 30px;
    margin: 0px;
  }
  h5 {
    font-size: 25px;
    margin: 0px;
  }
  h6 {
    font-size: 22px;
    margin: 0px;
  }
  p, option, select {
    font-size: 18px;
    margin: 0px;
  }
  option { font-size: 18px; }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 960px){
    h1 { font-size: 50px; }
    h2 { font-size: 25px; }
    h3 { font-size: 20px; }
    h4 { font-size: 15px; }
    h5 { font-size: 12px; }
    h6 { font-size: 10px; }
    p, option, select, input { font-size: 8px; }
  }
  @media only screen and (min-width: 1280px){
    h1 { font-size: 60px; }
    h2 { font-size: 30px; }
    h3 { font-size: 25px; }
    h4 { font-size: 20px; }
    h5 { font-size: 18px; }
    h6 { font-size: 15px; }
    p, option, select, input { font-size: 12px; }
  }
  @media only screen and (min-width: 1920px){
    h1 { font-size: 100px; }
    h2 { font-size: 50px; }
    h3 { font-size: 40px; }
    h4 { font-size: 30px; }
    h5 { font-size: 25px; }
    h6 { font-size: 22px; }
    p, option, select, input { font-size: 20px; }
  }
  @media only screen and (min-width: 2560px){
    h1 { font-size: 130px; }
    h2 { font-size: 70px; }
    h3 { font-size: 60px; }
    h4 { font-size: 50px; }
    h5 { font-size: 40px; }
    h6 { font-size: 30px; }
    p, option, select, input { font-size: 25px; }
  }
  @media only screen and (min-width: 3840px){
    h1 { font-size: 180px; }
    h2 { font-size: 80px; }
    h3 { font-size: 70px; }
    h4 { font-size: 60px; }
    h5 { font-size: 50px; }
    h6 { font-size: 40px; }
    p, option, select, input { font-size: 35px; }
  }
  @media only screen and (min-width: 7680px){
    h1 { font-size: 200px; }
    h2 { font-size: 140px; }
    h3 { font-size: 130px; }
    h4 { font-size: 120px; }
    h5 { font-size: 110px; }
    h6 { font-size: 90px; }
    p, option, select, input { font-size: 80px; }
  }

`;

export default GlobalStyle;
