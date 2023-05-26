import styles from './Search.module.scss';

function Search() {
  return (
    <div className="search-input">
      <img className={styles.icon} src="/search-icon.svg" alt="#" />
      <input className={styles.input} placeholder="Поиск ..." type="text" />
    </div>
  );
}

export default Search;
