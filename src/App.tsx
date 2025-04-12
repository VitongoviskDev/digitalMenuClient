import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/admin/Home';
import MenusPage from './pages/admin/Menus';
import MenuDetailsPage from './pages/admin/MenuDetailPage';
import LoginPage from './pages/LoginPage';

import styles from './App.module.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={styles.app}>
      {isAdminRoute && <Navbar />}
      
      <Routes>
        <Route path="/admin" element={<ProtectedRoute role="admin" />}>
          <Route index element={<HomePage />} />
          <Route path="menus" element={<MenusPage />} />
          <Route path="menus/:id" element={<MenuDetailsPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
