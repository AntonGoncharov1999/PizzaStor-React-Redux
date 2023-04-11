import {React} from 'react';

import styles from './Searth.module.scss';
import {SearthContext} from '../..//App';

function Searth () {
  const {searthValue, setSearthValue} = React.useContext(SearthContext);

  return (
  <input
    onChange={(event)=>setSearthValue(event.target.value)}  
    value={searthValue}
    className={styles.input} 
    type="text" 
    placeholder='Поиск пицци...' />
  )
}

export default Searth