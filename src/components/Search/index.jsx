import React from 'react';

import styles from './Search.module.scss';
import Context from '../../Context';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(Context);

  return (
    <div className="search-input">
      <img className={styles.icon} src="/search-icon.svg" alt="#" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск ..."
        type="text"
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clear}
          src="/icons/x-icon.svg"
          alt="#"
        />
      )}
    </div>
  );
}

export default Search;
