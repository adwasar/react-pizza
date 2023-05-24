import Header from '../../components/Header';

import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className={styles['error-container']}>
            <h1>Упс, страница не существует</h1>
            <p>Вы указали неправильный адрес или перешли по некорректной ссылке</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
