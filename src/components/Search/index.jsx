import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchValue } from '../../redux/slices/searchSlice';
import styles from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);

  return (
    <div className="search-input">
      <img className={styles.icon} src="/search-icon.svg" alt="#" />
      <input
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        className={styles.input}
        placeholder="Поиск ..."
        type="text"
      />
      {searchValue && (
        <img
          onClick={() => dispatch(setSearchValue(''))}
          className={styles.clear}
          src="/icons/x-icon.svg"
          alt="#"
        />
      )}
    </div>
  );
}

export default Search;
