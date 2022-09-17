import { increment } from '../reducers/counterSlice';

export const tambah = () => async (dispatch) => {
  dispatch(increment());
};
