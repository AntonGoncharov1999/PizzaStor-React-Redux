import {React} from 'react'

import styles from './Searth.module.scss'

function Searth ({searthValue, setSearthValue}) {
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