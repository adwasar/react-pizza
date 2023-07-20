import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage } from '../../redux/slices/filterSlice';
import styles from './Pagination.module.scss';

function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);
  const numberOfPizzas = useSelector((state) => state.pagination.numberOfPizzas);

  const pages = [...Array(Math.ceil(numberOfPizzas / 8))];

  const goBackPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const goNextPage = () => {
    if (currentPage < pages.length) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className={styles.container}>
      <ul>
        <button onClick={goBackPage}>{'<'}</button>
        {pages.map((el, i) => (
          <li
            onClick={() => dispatch(setCurrentPage(i + 1))}
            key={i}
            className={i + 1 === currentPage ? styles.active : ''}>
            {i + 1}
          </li>
        ))}
        <button onClick={goNextPage}>{'>'}</button>
      </ul>
    </div>
  );
}

export default Pagination;
