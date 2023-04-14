import React from 'react';

import styles from './Searth.module.scss';
import {SearthContext} from '../..//App.js';


function Searth(){
  const {searthValue, setSearthValue} = React.useContext(SearthContext);
  return (
  <input
    value={searthValue}
    onChange={(event)=>setSearthValue(event.target.value)}  
    className={styles.input} 
    placeholder='Поиск пицци...' />
  )
}

export default Searth