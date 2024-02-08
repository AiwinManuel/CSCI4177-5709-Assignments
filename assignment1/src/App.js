import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import BookDetailPage from './Book/BookDetail';

function App() {
  return (
    <Router>
      <Navbar/>
      <BookDetailPage></BookDetailPage>
    </Router>
  );
}

export default App;
