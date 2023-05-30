import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Context from './Context';

import router from './routing';
import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Context.Provider value={{ searchValue, setSearchValue, currentPage, setCurrentPage }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
