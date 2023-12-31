import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigate, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import NewProduct from './pages/NewProduct';
import Allproduct from './pages/Allproduct';
import NotFound from './pages/NotFound';
import MyCart from './pages/MyCart';
import { useAuthContext } from './context/AuthContext';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './component/CategoryPage';
import Search from './pages/Search';
import Login from './pages/Login';
import Join from './pages/Join';

const root = ReactDOM.createRoot(document.getElementById('root'));

//관리자 인증
const ProtectRoute = ({checkAdmin, children})=>{
  const {user} = useAuthContext();
  if(!user || (checkAdmin && !user.isAdmin)){
    return <Navigate to = '/' replace/>
  }
  return children;
}

const routes  =  createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement:<NotFound/>,

    children : [ //헤더페이지연결
      {path : '/products', element:<Allproduct/>},

      {
        path : '/products/new',
        element :
        <ProtectRoute checkAdmin>
        <NewProduct/>
        </ProtectRoute>
        },
      {path : '/cart', element :<MyCart/>},
      {path : '/products/detail/:id',element : <ProductDetail/>},
      {path : '/products/:category', element: <CategoryPage/>},
      {path : '/search', element: <Search/>},
      {path : '/login', element : <Login/>},
      {path : '/join', element : <Join/>}
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
yarn add react-router-dom
yarn add react-iocns
yarn add styled-components
*/