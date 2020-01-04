import React from 'react';

import ig from '../images/ig.png';
import fb from '../images/fb.png';
import gmail from '../images/gmail.png';

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <a href='https://www.instagram.com/latteluvdrivethru'>
        <img src={ig} alt='ig icon' />
      </a>
      <a href='https://www.facebook.com/latteluvdrivethru'>
        <img src={fb} alt='ig icon' />
      </a>
      <a href='mailto: marielatteluv@gmail.com'>
        <img src={gmail} alt='ig icon' />
      </a>
    </div>
  );
};

export default SocialMedia;
