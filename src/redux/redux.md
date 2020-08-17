## Importar el provider en el index para pasar el estore como un HOC a toda la aplicación

## 1. Para hooks instalar redux y react-redux

## 2. Inicializa el store

## 3. Usa el useSelector para acceder al store y useDispatch para mandar actions a los reducers y modificar el store

## El store

import { createStore } from 'redux';
const stateDefault = {
names: [],
};

const reducer = (state = stateDefault, action) => {
switch (action.type) {
case 'ADD_NAME':
return {
...state,
names: [...state.names, action.payload],
};
default:
return state;
}
};

export default createStore(reducer);

##los Actions
const Actions = () => {
const addName = (name) => {
return dispatchEvent({
type: 'ADD_NAME',
payload: name,
});
};

return [addName];
};
export default Actions();
