import React from 'react';
import lattelocation from '../images/lattelocation.jpg';
import family from '../images/family.png';

const Location = () => {
  return (
    <div className='location-page'>
      <div className='store-front'>
        <img src={lattelocation} alt='stor-front' />
      </div>

      <div className='location'>
        <h1>Our location</h1>
        <a href='https://www.google.com/maps/place/Latte+Luv/@40.0045169,-76.1038483,15z/data=!4m2!3m1!1s0x0:0x2aa8fe4a34bbd9a7?sa=X&ved=2ahUKEwicndLlnermAhXCg-AKHUndCPwQ_BIwCnoECBkQCA'>
          <address>3314 Lincoln Hwy. East, Paradise, PA 17562</address>
        </a>
        <hr />
        <h4>Established in 2005 & renovated in 2017</h4>
        <p>
          We are a drive-thru only coffee shop located along Rt. 30. Family
          owned and operated, our unique drive-thru only concept brings our
          baristas face to face with our customers. Who doesn't like to be
          greeted with a smile instead of intercom system? Featuring 2
          drive-thru windows & 1 walkup window... Fast, Convenient & Delicious!
        </p>
      </div>

      <hr />

      <div className='family-section'>
        <p>Family owned & operated</p>
        <p>Merv & Marie Beiler</p>&<p>Family</p>
        <img src={family} alt='family-pic' />
      </div>
    </div>
  );
};

export default Location;
