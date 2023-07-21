import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import SkeletonPizza from '../components/PizzaBlock/Skeleton';

import { setCategoryId, setSortType, setCurrentPage } from '../redux/slices/filterSlice';
import { setNumberOfPizzas } from '../redux/slices/paginationSlice';
import { categories } from '../components/Sort';
import Pagination from '../components/Pagination';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortBy);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const searchValue = useSelector((state) => state.search.value);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isInitialLoad = useRef(true);

  const pizzasOnPage = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  useEffect(() => {
    const searchObj = qs.parse(window.location.search.substring(1));
    dispatch(setCategoryId(+searchObj.category));

    if (window.location.search) {
      axios
        .get(`https://646789062ea3cae8dc31f2fb.mockapi.io/pizzas${window.location.search}`)
        .then((res) => {
          dispatch(setNumberOfPizzas(res.data.length));
          dispatch(setCurrentPage(+searchObj.page));
          dispatch(setCategoryId(searchObj.category ? searchObj.category : 0));
          if (searchObj.sortBy === 'rating' && searchObj.order === 'asc') {
            dispatch(setSortType(categories[0]));
          } else if (searchObj.sortBy === 'price' && searchObj.order === 'asc') {
            dispatch(setSortType(categories[1]));
          } else if (searchObj.sortBy === 'price' && searchObj.order === 'desc') {
            dispatch(setSortType(categories[2]));
          } else if (searchObj.sortBy === 'title' && searchObj.order === 'asc') {
            dispatch(setSortType(categories[3]));
          } else if (searchObj.sortBy === 'title' && searchObj.order === 'desc') {
            dispatch(setSortType(categories[4]));
          }

          console.log(searchObj);

          setPizzas(res.data);
          setIsLoading(false);
        });
    } else {
      axios
        .get(`https://646789062ea3cae8dc31f2fb.mockapi.io/pizzas?length=8&page=1`)
        .then((res) => {
          dispatch(setNumberOfPizzas(res.data.length));
          dispatch(setCategoryId(0));
          setPizzas(res.data);
          setIsLoading(false);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isInitialLoad.current) {
      const order = sortType.attribute.includes('-') ? '&order=desc' : '&order=asc';
      const sortBy = `&sortBy=${sortType.attribute.replace('-', '')}`;
      const category = categoryId > 0 ? `&category=${categoryId}` : '';
      const searchParam = searchValue ? `&search=${searchValue}` : '';
      const page = `&page=${currentPage}`;
      const limit = `&limit=8`;

      setIsLoading(true);
      axios
        .get(
          `https://646789062ea3cae8dc31f2fb.mockapi.io/pizzas?${searchParam}${category}${sortBy}${order}${page}${limit}`,
        )
        .then((res) => {
          navigate(`?${searchParam}${category}${sortBy}${order}${page}${limit}`);
          if (!searchParam && !category && sortType.attribute === 'rating' && currentPage === 1) {
            const newUrl = window.location.pathname;
            window.history.replaceState({}, '', newUrl);
          }
          setPizzas(res.data);
          setIsLoading(false);
        });
      axios
        .get(
          `https://646789062ea3cae8dc31f2fb.mockapi.io/pizzas?${searchParam}${category}${sortBy}${order}`,
        )
        .then((res) => {
          dispatch(setNumberOfPizzas(res.data.length));
        });
    } else {
      isInitialLoad.current = false;
    }
  }, [sortType, categoryId, searchValue, currentPage, dispatch, navigate]);

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
