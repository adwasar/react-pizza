import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchValue } from '../../redux/slices/searchSlice';
import styles from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);

  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  return (
    <div className="search-input">
      <img className={styles.icon} src="/search-icon.svg" alt="#" />
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        className={styles.input}
        placeholder="Поиск ..."
        type="text"
      />
      {searchValue && (
        <img onClick={onClickClear} className={styles.clear} src="/icons/x-icon.svg" alt="#" />
      )}
    </div>
  );
}

export default Search;
