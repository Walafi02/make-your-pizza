import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    font-size: 25px;
    min-width: 350px;
    padding: 40px;
    margin: 20px;
  }

  div {
    flex: 1;
    margin: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    flex-direction: column;

    strong {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }

    span {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
      color: #f6a531;
    }

    img {
      margin-bottom: 25px;
    }
  }
  .toppings {
    display: flex;
    flex-direction: column;

    div {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 10px !important;

      img {
        height: 100px;
        width: 100px;
      }

      div {
        flex-direction: column;
      }
    }
  }
`;
