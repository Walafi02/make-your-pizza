import React, { useEffect, useState, useMemo } from 'react';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import is from 'is';
import queryString from 'query-string';

import history from '../../services/history';
import { Title, Actions } from '../../components';
import { Toppings } from './styles';
import { toppings, sizes, crusts } from '../../utils/constants';

const ChooseCrust: React.FC = () => {
  const { search } = useLocation();
  const [size, setSize] = useState({ title: '', price: 0, maxIngredients: 0 });
  const [crust, setCrust] = useState({ title: '', price: 0 });
  const [toppingsSelected, setToppingsSelected] = useState<string[]>([]);

  const price = useMemo(() => {
    return (
      size.price +
      crust.price +
      (toppingsSelected.length > 3 ? (toppingsSelected.length - 3) * 0.5 : 0)
    );
  }, [size, crust, toppingsSelected]);

  const handleNext = () => {
    const searchString = queryString.stringify(
      {
        titleSize: size.title,
        titleCrust: crust.title,
        toppingsList: toppingsSelected,
      },
      { arrayFormat: 'bracket' }
    );

    history.push({
      pathname: '/make-your-pizza/check-custom-pizza',
      search: searchString,
    });
  };

  const handlePrev = () => {
    history.push(`/make-your-pizza${search}`);
  };

  const handleClick = (title: string) => {
    if (
      !(
        toppingsSelected.length >= size.maxIngredients &&
        !toppingsSelected.includes(title)
      )
    ) {
      if (toppingsSelected.includes(title)) {
        setToppingsSelected((titles: string[]) =>
          titles.filter((topping) => topping !== title)
        );
      } else {
        setToppingsSelected((titles: string[]) => [...titles, title]);
      }
    }
  };

  useEffect(() => {
    const {
      titleCrust = '',
      titleSize = '',
      toppingsList = [],
    } = queryString.parse(search, {
      arrayFormat: 'bracket',
    });

    if (toppingsList) setToppingsSelected(toppingsList as string[]);

    const sizesResult = sizes.find((s) => s.title === titleSize);
    const crustsResult = crusts.find((c) => c.title === titleCrust);
    if (is.undefined(sizesResult) || is.undefined(crustsResult))
      history.push('/make-your-pizza');

    setSize((value) => sizesResult || value);
    setCrust((value) => crustsResult || value);
  }, [search]);

  return (
    <>
      <Title title="Choose your toppings" price={price} />

      <Toppings>
        {toppings.map(({ title, url }) => (
          <div
            key={title}
            className={classnames(
              toppingsSelected.length >= size.maxIngredients &&
                !toppingsSelected.includes(title) &&
                'disable',
              toppingsSelected.includes(title) && 'activer'
            )}
            onClick={() => handleClick(title)}
          >
            <img src={url} alt="" />
            <strong>{title}</strong>
          </div>
        ))}
      </Toppings>
      <Actions onPrev={() => handlePrev()} onNext={() => handleNext()} />
    </>
  );
};

export default ChooseCrust;
