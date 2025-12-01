import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Layout from './components/layout/Layout';
import ThemeModeProvider from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeModeProvider>
  );
};

export default App;
