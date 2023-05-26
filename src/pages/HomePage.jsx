import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import SkeletonPizza from '../components/PizzaBlock/Skeleton';

function HomePage() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    attribute: 'rating',
  });

  React.useEffect(() => {
    const order = sortType.attribute.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.attribute.replace('-', '');
    const category = categoryId && 'category=' + categoryId;

    setIsLoading(true);
    fetch(
      `https://646789062ea3cae8dc31f2fb.mockapi.io/pizzas?sortBy=${sortBy}&${category}&order=${order}`,
    ).then((res) =>
      res.json().then((json) => {
        setPizzas(json);
        setIsLoading(false);
      }),
    );
  }, [sortType, categoryId]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories categoryId={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
              <Sort sortType={sortType} onChangeSort={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...Array(6)].map((_, i) => <SkeletonPizza key={i} className="pizza-block" />)
                : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
