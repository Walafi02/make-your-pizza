import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

export const Crust = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0 0;

  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 40px 20px;
    min-width: 100px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    strong {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }

    span {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
      color: #f6a531;
    }
  }

  .activer {
    border: 1px solid #fff;
  }
`;

export const Pizzas = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    min-width: 250px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      margin: auto 0;
    }

    strong {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-top: 25px;
    }

    span {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
      color: #f6a531;
    }
  }

  .activer {
    border: 1px solid #fff;
  }
`;
