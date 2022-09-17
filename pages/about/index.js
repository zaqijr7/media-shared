import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { tambah } from '../../redux/actions/counter';
import { increment, decrement } from '../../redux/reducers/counterSlice';

function index() {
  const nilai = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(increment())}>tambah</button>
      <button type="button" onClick={() => dispatch(decrement())}>kurang</button>
      {/* <button type="button" onClick={() => dispatch(decrement())}>kurang</button> */}
      {' '}
      <br />
      <span className="font-bold">{nilai}</span>
    </>
  );
}

export default index;
