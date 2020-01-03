import React from 'react';
import latteluv from '../images/latteluv.png';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className='home-page'>
      <img className='logo' src={latteluv} alt='logo' />

      <section class='quote'>
        <h2>
          “Trust In the Lord with all your heart & don’t lean on your own
          understanding. In all your ways, acknowledge Him and he will make your
          path straight” Proverbs 3:5-6
        </h2>
      </section>
      <hr />
      <div className='carousel'>
        <Carousel />
      </div>

      <footer>
        <h1>
          Here to serve you your coffee with "latte luv"
          <span role='img' aria-label='latte'>
            ☕
          </span>
        </h1>
      </footer>
    </div>
  );
};

export default Home;
