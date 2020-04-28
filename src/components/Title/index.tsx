import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  price?: number;
}

const Title: React.SFC<Props> = ({ title, price }: Props) => {
  return (
    <Container>
      <strong>{title}</strong>
      {price !== undefined && <span>{`$${price}`}</span>}
    </Container>
  );
};

export default Title;
