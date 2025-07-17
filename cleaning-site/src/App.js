import React from "react";
import './App.css';
import Header from './components/Header';
import Empty from './components/Empty';
import Footer from './components/Footer';

const App = () => {
  return(
    <div className="app-wrapper">
      
      <Header />
      <Empty />
      <Footer />

    </div>
  );
}

export default App;