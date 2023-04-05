import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Card from './components/Card';

import './scss/app.scss';
import pizza from './assets/pizza.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                pizza.map((item) => (
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
                ))
              }
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
