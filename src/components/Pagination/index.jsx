import React, { useContext } from 'react';

import Context from '../../Context';
import styles from './Pagination.module.scss';

function Pagination({ pizzas }) {
  const { currentPage, setCurrentPage } = useContext(Context);

  const pages = [...Array(Math.ceil(pizzas.length / 8))];

  const goBackPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <ul>
        <button onClick={goBackPage}>{'<'}</button>
        {pages.map((el, i) => (
          <li
            onClick={() => setCurrentPage(i + 1)}
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
