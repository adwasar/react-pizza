import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Закрытые'];

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((category, i) => (
            <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
