import React, { useEffect, useState, useMemo } from 'react';
import classnames from 'classnames';
import is from 'is';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { Title, Actions } from '../../components';
import { Pizzas, Crust } from './styles';
import pizza from '../../assets/pizza.png';
import { sizes, crusts } from '../../utils/constants';
import history from '../../services/history';

const ChooseSize: React.FC = () => {
  const { search } = useLocation();

  const [size, setSize] = useState({ title: '', price: 0 });
  const [crust, setCrust] = useState({ title: '', price: 0 });

  const priceTitle = useMemo(() => size.price + crust.price, [size, crust]);

  const handleNext = () => {
    const searchString = queryString.stringify(
      {
        titleSize: size.title,
        titleCrust: crust.title,
      },
      {
        arrayFormat: 'bracket',
      }
    );
    history.push({
      pathname: `/make-your-pizza/toppings`,
      search: searchString,
    });
  };

  useEffect(() => {
    const { titleCrust = '', titleSize = '' } = queryString.parse(search, {
      arrayFormat: 'bracket',
    });

    const sizesResult = sizes.find((s) => s.title === titleSize);
    const crustsResult = crusts.find((c) => c.title === titleCrust);
    if (is.undefined(sizesResult) || is.undefined(crustsResult))
      history.push('/make-your-pizza');

    setSize((value) => sizesResult || value);
    setCrust((value) => crustsResult || value);
  }, [search]);

  return (
    <>
      <Title title="Choose your toppings" price={priceTitle} />

      <Pizzas>
        {sizes.map(({ title, price, className }) => (
          <div
            key={title}
            className={classnames(title === size.title && 'activer')}
            onClick={() => setSize({ title, price })}
            title={`${title} ($${price})`}
          >
            <img src={pizza} className={className} alt="pizza" />
            <strong>{title}</strong>
            <span>{`$${price}`}</span>
          </div>
        ))}
      </Pizzas>

      <Title title="Choose your crust" />

      <Crust>
        {crusts.map(({ title, price }) => (
          <div
            key={title}
            className={classnames(title === crust.title && 'activer')}
            onClick={() => setCrust({ title, price })}
            title={`${title} ($${price})`}
          >
            <strong>{title}</strong>
            <span>{`$${price}`}</span>
          </div>
        ))}
      </Crust>
      <Actions
        onNext={handleNext}
        disabledNext={is.empty(size.title) || is.empty(crust.title)}
      />
    </>
  );
};

export default ChooseSize;
