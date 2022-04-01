import { useSelector, useDispatch } from 'react-redux';
import { decrement, increase, increment, toggleCounter, TRootState } from '../store';
import classes from './Counter.module.css';

const Counter: React.FC = () => {
  
  const dispatch = useDispatch()
  const counter = useSelector((state: TRootState) => state.counter.counter);
  const show = useSelector((state: TRootState) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(increment());
  }

  const increaseHandler = () => {
    dispatch(increase(10));
  }

  const decrementHandler = () => {
    dispatch(decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
