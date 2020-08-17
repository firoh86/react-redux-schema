import { useDispatch } from 'react-redux';
const Actions = () => {
  const dispatch = useDispatch();

  const addName = (name) => {
    return dispatch({
      type: 'ADD_NAME',
      payload: name,
    });
  };

  return [addName];
};
export default Actions;
