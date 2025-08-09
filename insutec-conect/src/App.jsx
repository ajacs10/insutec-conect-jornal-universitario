// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ArticlePage from './components/ArticlePage';
import NewsPage from './components/NewsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;