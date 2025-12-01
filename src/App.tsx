import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Layout from './components/layout/Layout';
import ThemeModeProvider from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeModeProvider>
  );
};

export default App;
