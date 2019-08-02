import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, decrement, increment } from '../actions';
import { CounterState } from '../reducer';
import CounterComponent from '../components/Counter';

const Counter: React.FC = () => {
  const count = useSelector((state: CounterState) => state.count);
  const dispatch = useDispatch();
  const handleAdd = useCallback((amount: number) => dispatch(add(amount)), [
    dispatch,
  ]);
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);
  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);

  return (
    <CounterComponent
      count={count}
      add={handleAdd}
      decrement={handleDecrement}
      increment={handleIncrement}
    />
  );
};

export default Counter;
