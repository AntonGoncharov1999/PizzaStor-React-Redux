import React from 'react'
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/pizzaBlock/Card';
import Sceleton from '../components/pizzaBlock/CardSceleton';

function Home(){
  const [pizza, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
  axios.get('https://642e23268ca0fe3352c96feb.mockapi.io/pizza')
    .then((res) => { setPizza(res.data); setIsLoading(false) });
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <div className="content__top">
        <Categories/>
        <Sort/>
        </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading 
              ? [...new Array(8)].map((_,index)=><Sceleton key={index}/>)  
              : pizza.map((item) => (
                <Card 
                  key={item.id} 
                  title={item.title} 
                  prise={item.price} 
                  image={item.imageUrl} 
                  size={item.sizes} 
                  type={item.types}
                  category = {item.category}
                  raiting = {item.raiting}
                />
              )
            )
          }
        </div>
    </>
  )
}

export default Home;