// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BlogList from './BlogList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

