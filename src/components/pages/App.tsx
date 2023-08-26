import React from 'react';
import Formulario from '../Forms';
import Lista from '../Lists';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App;
