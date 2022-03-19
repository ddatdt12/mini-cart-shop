import 'antd/dist/antd.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/Cart';
import HomePage from './pages/Home';
import AppLayout from './pages/Layout';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
