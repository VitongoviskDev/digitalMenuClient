import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';
import { MenuMinDTO } from './dtos/MenuMinDTO';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import MenusPage from './pages/Menus';
import MenuDetailsPage from './pages/MenuDetailPage';

import styles from './App.module.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/menus">Menus</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/menus/:id" element={<MenuDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
