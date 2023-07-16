import React, { useState } from "react";

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={()=> onSelectItem(null)}>Все</li>
        {items.map((el, index) => ( 
          <li 
          className={activeItem === index ? 'active' : ''}
          onClick={() => onSelectItem(index)} key={`${el}_${index}`}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
