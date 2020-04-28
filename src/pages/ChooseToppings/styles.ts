import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

export const Toppings = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;

  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 40px 20px;
    min-width: 130px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 4px;
    }

    strong {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-top: 16px;
    }
  }

  .activer {
    border: 1px solid #fff;
  }

  .disable {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
`;
