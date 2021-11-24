import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
