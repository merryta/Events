import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import "../styles/Home.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.login);
  console.log(user);

  // useEffect(() => {
  //   if(!user.id) {
  //     navigate("/auth");
  //   }
  // }, [])
  return (
    <div className="home__container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
