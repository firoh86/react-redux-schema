import React from 'react';
import './App.css';
// con hooks para acceder al state/store usas el hook useSelector
import { useSelector } from 'react-redux';
// carga de actions de redux(dipatchs)
import actions from './redux/Actions';
function App() {
  // representamos el acceso al state de redux
  const names = useSelector((state) => state);
  // importamos los actions
  const [addName] = actions('');

  return (
    <div className="App">
      <button className="button" onClick={() => addName('firoh')}>
        Añade un nombre al store de redux
      </button>
      <ul>
        {names.names.map((name, idx) => {
          return <li key={idx}>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
