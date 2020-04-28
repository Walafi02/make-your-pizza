import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import is from 'is';
import queryString from 'query-string';
import history from '../../services/history';
import pizza from '../../assets/pizza.png';

import { Title, Actions } from '../../components';
import { toppings, sizes, crusts } from '../../utils/constants';

import { Card } from './styles';

const CheckCustomPizza: React.FC = () => {
  const { search } = useLocation();
  const [toppingsSelect, setToppingsSelect] = useState<string[]>([]);
  const [size, setSize] = useState({
    title: '',
    price: 0,
    maxIngredients: 0,
    className: '',
  });
  const [crust, setCrust] = useState({ title: '', price: 0 });

  const priceToppings = useMemo(
    () => (toppingsSelect.length > 3 ? (toppingsSelect.length - 3) * 0.5 : 0),
    [toppingsSelect]
  );

  const finalPrice = useMemo(() => size.price + crust.price + priceToppings, [
    size,
    crust,
    priceToppings,
  ]);

  const handleFinish = () => {
    alert('Thank you...');
    history.push('/make-your-pizza');
  };

  const handlePrev = () => {
    history.push(`/make-your-pizza/toppings${search}`);
  };

  useEffect(() => {
    const {
      titleCrust = '',
      titleSize = '',
      toppingsList = [],
    } = queryString.parse(search, {
      arrayFormat: 'bracket',
    });

    if (toppingsList) setToppingsSelect(toppingsList as string[]);
    const sizesResult = sizes.find((s) => s.title === titleSize);
    const crustsResult = crusts.find((c) => c.title === titleCrust);

    if (is.undefined(sizesResult) || is.undefined(crustsResult))
      history.push('/make-your-pizza');

    setSize((value) => sizesResult || value);
    setCrust((value) => crustsResult || value);
  }, [search]);

  return (
    <>
      <Title title="Check your custom pizza" />

      <Card>
        <h1>Your Pizza Size Selected</h1>
        <div className="size">
          <img src={pizza} className={size.className} alt="pizza" />
          <strong>{size.title}</strong>
          <span>{`+ $${size.price}`}</span>
        </div>
      </Card>

      <Card>
        <h1>Your Crust Selected</h1>
        <div>
          <strong>{crust.title}</strong>
          <span>{`+ $${crust.price}`}</span>
        </div>
      </Card>

      <Card>
        <h1>Your Toppings Selected</h1>
        <div className="toppings">
          <div>
            {toppings.map(
              (top) =>
                toppingsSelect.includes(top.title) && (
                  <div key={top.title}>
                    <img src={top.url} alt="" />
                    <strong>{top.title}</strong>
                  </div>
                )
            )}
          </div>
          <span>{`+ $${priceToppings}`}</span>
        </div>
      </Card>
      <Card>
        <h1>Final Price</h1>

        <div>
          <span>{`$${finalPrice}`}</span>
        </div>
      </Card>

      <Actions onPrev={() => handlePrev()} onFinish={() => handleFinish()} />
    </>
  );
};

export default CheckCustomPizza;
