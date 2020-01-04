import React from 'react';
import { Link } from 'react-router-dom';

import ig from '../images/ig.png';
import fb from '../images/fb.png';
import gmail from '../images/gmail.png';

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <Link to='https://www.instagram.com/latteluvdrivethru/'>
        <img src={ig} alt='ig icon' />
      </Link>
      <Link>
        <img src={gmail} alt='gmail icon' />
      </Link>
      <Link>
        <img src={fb} alt='fb icon' />
      </Link>
    </div>
  );
};

export default SocialMedia;
