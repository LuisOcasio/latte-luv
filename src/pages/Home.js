import React from 'react';
import latteluv from '../images/latteluv.png';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='logo-section'>
        <img className='logo' src={latteluv} alt='logo' />
        <article className='quote'>
          <p>
            “Trust In the Lord with all your heart & don’t lean on your own
            understanding. In all your ways, acknowledge Him and he will make
            your path straight” Proverbs 3:5-6
          </p>
        </article>
      </div>

      <hr />

      <div className='carousel'>
        <Carousel />
      </div>

      <hr />
    </div>
  );
};

export default Home;
