import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import network from '../../assets/home_voting_lottie.json';
// import city1 from '../../assets/check_lottie.json';
import city from '../../assets/city_lottie.json';
// import city3 from '../../assets/vote_registration_lottie.json';
// import city4 from '../../assets/voting_lottie.json';
// import city5 from '../../assets/winning_proposal_lottie.json';

import './home.scss';

const Home = () => {
  const loadNetworkPicture = () => {
    lottie.loadAnimation({
      container: document.getElementById('home_firsPart_network'),
      animationData: network,
      renderer: 'svg',
    });
  };

  const loadCityPicture = () => {
    lottie.loadAnimation({
      container: document.getElementById('home_secondPart_city'),
      animationData: city,
      renderer: 'svg',
    });
  };

  useEffect(() => {
    loadNetworkPicture();
    loadCityPicture();
    lottie.setSpeed(0.5);
  }, []);

  return (
    <div className="home">
      <div className="home_firstPart">
        <h1 className="home_firstPart_title">Enter the world of secure electronic voting</h1>
        <div id="home_firsPart_network" />
      </div>
      <div className="home_secondPart">
        <h2 className="home_secondPart_title">With blockchain technologie you can now run secure voting session for your city</h2>
        <div className="home_secondPart_container">
          <p className="home_secondPart_text left_top">Use remote voting with confidence! </p>
          <p className="home_secondPart_text right_top">Continue to organize your voting sessions despite pandemic!</p>
          <div id="home_secondPart_city" />
          <p className="home_secondPart_text left_bottom">Add value to your voting sessions!</p>
          <p className="home_secondPart_text right_bottom">Offer remote voting to all your participants!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
