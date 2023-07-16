import React from 'react'
import { Categories,Sortpopup, PizzaBlock  } from "../components";

const Home = ({items}) => {
  return (
    <div className="container">
    <div className="content__top">
      <Categories
      onClickItem ={(name)=> console.log(name)}
        items={[
          "Мясные",
          "Вегетарианская",
          "Гриль",
          "Острые",
          "Закрытые",
        ]}
      />

      <Sortpopup items ={[
        {name: 'популярности', type: 'popular' },
        {name: 'цена', type: 'price' },
        {name: 'алфавиту', type: 'alphabet' }
        
      ]}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">

      {
        items.map(obj => (
          <PizzaBlock key={obj.id} product={obj}/>
        ) )
        
      }
    </div>
  </div>
  )
}

export default Home
