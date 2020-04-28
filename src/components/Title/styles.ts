import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  strong {
    font-size: 48px;
    font-weight: bold;
    padding: 0 40px;
    text-align: center;
  }

  span {
    position: absolute;
    right: 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #f6a531;
    border: 1px solid #ffffff;
    border-radius: 16px;
    padding: 4px 16px;
  }
`;
