
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import CardPage from './components/pages/CardPage';
import InvoicesPage from './components/pages/InvoicesPage';
import CustomersPage from './components/pages/CustomersPage';
import StatisticPage from './components/pages/StatisticPage';
import LoginPage from './components/pages/auth/LoginPage';
import RegisterPage from './components/pages/auth/RegisterPage';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/'  element={<HomePage/>}/> 
        <Route path='/card'  element={<CardPage/>}/> 
        <Route path='/invoices'  element={<InvoicesPage/>}/> 
        <Route path='/customers'  element={<CustomersPage/>}/> 
        <Route path='/statistic'  element={<StatisticPage/>}/> 
        <Route path='/products'  element={<ProductPage/>}/> 
        <Route path='/login'  element={<LoginPage/>}/> 
        <Route path='/register'  element={<RegisterPage/>}/> 

      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
