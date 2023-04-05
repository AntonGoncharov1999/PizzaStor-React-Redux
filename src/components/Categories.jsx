import React from 'react';


function Categories() {
  const [ActiveIndex, setActiveIndex] = React.useState(0);

  function onClickCategories(index){
    setActiveIndex(index);
  }

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль','Острые','Закрытые'];
  return(
    <div className="categories">
      <ul>
        {
          categories.map((category, index) => (
            <li key={category} onClick={()=> onClickCategories(index)} className={ActiveIndex === index ? 'active' : ''}>{category}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories;