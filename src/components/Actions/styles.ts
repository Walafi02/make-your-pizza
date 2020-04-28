import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  button {
    background: transparent;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 16px;
    padding: 4px 16px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
