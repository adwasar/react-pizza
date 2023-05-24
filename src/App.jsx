import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routing';
import './scss/app.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
