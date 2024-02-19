import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByValue } from '../redux/features/counter/counterSlice';

const Counter = () => {

    // const count = useSelector((state) => state.counter.count);
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    console.log('count:', count);

    return (
        <div className='my-10'>
            <h2>Counter Component</h2>
            <button onClick={() => dispatch(increment())} className='btn bg-purple-400 p-2 rounded-lg mb-3'>Increment</button>
            <br />
            <button onClick={() => dispatch(incrementByValue(5))} 
            className='btn bg-purple-400 p-2 rounded-lg'>Increment by 5</button>
            <h2 className='text-3xl my-2'>{count}</h2>
            <button onClick={() => dispatch(decrement())} className='btn bg-yellow-500 p-2 rounded-lg'>Decrement</button>

        </div>
    );
};

export default Counter;