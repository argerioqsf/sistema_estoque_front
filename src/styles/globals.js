import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin:0;
    outline:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Raleway', sans-serif;
  }

  #root{
    height:100%;
  }

  html{
    box-sizing: border-box;
    background: #F5F4F0;
    display:block;
    height: 100%;
    margin:0 auto;
    padding: 0;
  }

  body{
    background-color:#fafafa;
    height:100%;
    min-height:100vh;
    /* padding: 1rem; */
    margin:0;
    font-family:Verdana;
  }

  button{
    background:transparent;
    border:none;
    color:#fff;
    cursor:pointer;
  }

`;