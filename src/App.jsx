import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Context from './Context';

import router from './routing';
import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <Context.Provider value={{ searchValue, setSearchValue }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
