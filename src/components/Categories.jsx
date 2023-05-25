import React from 'react';

function Categories({ categoryId, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Закрытые'];

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((category, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={categoryId === i ? 'active' : ''}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
