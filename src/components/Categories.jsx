import React from 'react';


function Categories({categoryId, onClickCategories}) {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль','Острые','Закрытые'];
  return(
    <div className="categories">
      <ul>
        {
          categories.map((category, index) => (
            <li key={category} onClick={()=> onClickCategories(index)} className={categoryId === index ? 'active' : ''}>
              {category}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories;