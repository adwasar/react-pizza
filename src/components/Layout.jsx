import { Outlet } from 'react-router-dom';

import Header from './Header';

function Layout() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Layout;
