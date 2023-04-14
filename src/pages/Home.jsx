import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {setCategory} from '../Redux/Slices/filterSlice'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/pizzaBlock/Card';
import Sceleton from '../components/pizzaBlock/CardSceleton';
import Pagination from '../components/Pagination/Pagination';
import {SearthContext} from '.././App.js';

function Home(){
  const categoryId = useSelector(state => state.filter.cotegoryId); 
  const sortType = useSelector(state => state.filter.sort.sortOroperty); 
  const dispatch = useDispatch()

  const {searthValue} = React.useContext(SearthContext);
  const [pizza, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const searth = searthValue ? `searth=${searthValue}` : '';

    setIsLoading(true)
    axios
      .get(`https://642e23268ca0fe3352c96feb.mockapi.io/pizza?page=${page}&limit=4&${searth}${category}&sortBy=${sortType}`
      ).then((res) => { setPizza(res.data); setIsLoading(false) });
    window.scrollTo(0, 0);
  },[categoryId, sortType, searthValue, page]);

  const sceletons = [...new Array(8)].map((_,index)=><Sceleton key={index}/>);

  const onClickCategory = (id) => {
    dispatch(setCategory(id));
  };

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategories={onClickCategory} />
        <Sort/>
        </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading 
              ? sceletons  
              : pizza.map((item) => (
                  <Card 
                    key={item.id} 
                    title={item.title} 
                    prise={item.price} 
                    image={item.imageUrl}
                    size={item.sizes} 
                    type={item.types}category = {item.category}
                    raiting = {item.raiting}
                  />
                )
            )
          }
        </div>
        <Pagination onPageCange={(number)=>setPage(number)} />
    </>
  )
}

export default Home;