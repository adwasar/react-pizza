import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import SkeletonPizza from '../components/PizzaBlock/Skeleton';

import { setCategoryId } from '../redux/slices/filterSlice';
import Pagination from '../components/Pagination';

function HomePage() {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortBy);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const searchValue = useSelector((state) => state.search.value);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const order = sortType.attribute.includes('-') ? '&order=desc' : '&order=asc';
    const sortBy = `&sortBy=${sortType.attribute.replace('-', '')}`;
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const searchParam = searchValue ? `&search=${searchValue}` : '';

    setIsLoading(true);
    axios
      .get(
        `https://646789062ea3cae8dc31f2fb.mockapi.io/pizzas?${searchParam}${category}${sortBy}${order}`,
      )
      .then((res) => {
        console.log(res.data);
        setPizzas(res.data);
        setIsLoading(false);
      });
  }, [sortType, categoryId, searchValue]);

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const pizzasAll = filteredPizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const maxPizzasOnPage = 8;
  const startPizzaIndex = (currentPage - 1) * maxPizzasOnPage;
  const endPizzaIndex = startPizzaIndex + maxPizzasOnPage;
  const pizzasOnPage = pizzasAll.slice(startPizzaIndex, endPizzaIndex);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories
                categoryId={categoryId}
                onChangeCategory={(id) => dispatch(setCategoryId(id))}
              />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...Array(6)].map((_, i) => <SkeletonPizza key={i} className="pizza-block" />)
                : pizzasOnPage}
            </div>
            <Pagination pizzas={pizzas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
