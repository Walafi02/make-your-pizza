import { createGlobalStyle } from 'styled-components';

import pizzaBackground from '../assets/pizza-background.jpeg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${pizzaBackground}) no-repeat fixed;
    background-size: cover;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 16px 'PT Serif', serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    color: #ffffff;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .large {
    height: 200px;
    width: 200px;
  }

  .medium {
    height: 160px;
    width: 160px;
  }

  .small {
    height: 120px;
    width: 120px;
  }
`;
