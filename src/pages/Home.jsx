import React from 'react'
import axios from 'axios';


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/pizzaBlock/Card';
import Sceleton from '../components/pizzaBlock/CardSceleton';
import Pagination from '../components/Pagination/Pagination';

function Home({searthValue}){
  const [pizza, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sort: 'rating' });
  const [categoryId, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const searth = searthValue ? `searth=${searthValue}` : '';

    setIsLoading(true)
    console.log(categoryId,sortType)
    axios
      .get(`https://642e23268ca0fe3352c96feb.mockapi.io/pizza?page=${page}&limit=4&${searth}${category}&sortBy=${sortType.sort}`
      ).then((res) => { setPizza(res.data); setIsLoading(false) });
    window.scrollTo(0, 0);
  },[categoryId, sortType, searthValue, page]);

  const sceletons = [...new Array(8)].map((_,index)=><Sceleton key={index}/>);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategories={(index)=> setCategoryId(index)} />
        <Sort sortType={sortType} onChangeSort={(index)=>setSortType(index)}/>
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