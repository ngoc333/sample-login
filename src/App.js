import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import Layout from './components/Layout';
import './App.css';

// ua-parser-js

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/login',
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
