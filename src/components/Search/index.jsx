import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lodash from 'lodash.debounce';

import { setSearchValue } from '../../redux/slices/searchSlice';
import styles from './Search.module.scss';

function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);
  const searchParams = useSelector((state) => state.filter.searchParams);

  const inputRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    lodash((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  useEffect(() => {
    setValue(searchParams || '');
  }, [searchParams]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  return (
    <div className="search-input">
      <img className={styles.icon} src="/search-icon.svg" alt="#" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeInput(e)}
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
