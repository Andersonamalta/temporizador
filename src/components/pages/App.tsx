import React from 'react';
import Formulario from '../Forms';
import Lista from '../Lists';
import style from './App.module.scss';
import Cronometro from '../Stopwatch';


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
