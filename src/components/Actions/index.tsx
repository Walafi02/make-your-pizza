import React from 'react';

import { Container } from './styles';

interface Props {
  onPrev?: Function;
  onNext?: Function;
  onFinish?: Function;
  disabledNext?: boolean;
  disabledPrev?: boolean;
}

const Actions = ({
  onPrev,
  onNext,
  onFinish,
  disabledNext,
  disabledPrev,
}: Props) => {
  return (
    <Container>
      <div>
        {onPrev && (
          <button
            onClick={() => onPrev()}
            type="button"
            disabled={disabledPrev}
          >
            Prev
          </button>
        )}
      </div>

      <div className="next">
        {onFinish && (
          <button type="button" onClick={() => onFinish()}>
            Finish
          </button>
        )}
        {onNext && (
          <button
            onClick={() => onNext()}
            type="button"
            disabled={disabledNext}
          >
            Next
          </button>
        )}
      </div>
    </Container>
  );
};

export default Actions;
