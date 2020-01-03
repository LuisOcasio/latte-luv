import React from 'react';
import lattemenu from '../images/lattemenu.jpg';

const Menu = () => {
  return (
    <div className='menu'>
      <h1>
        <span role='img' aria-label='latte'>
          ☕
        </span>
      </h1>
      <h4 className='menu-title'>
        The taste of a rich, smooth espresso drink, combined with steamed,
        creamy milk, and the best of chocolates-Ghirardelli, along with our
        quality Monin syrups...How can you resist? It's a taste of Paradise!
      </h4>
      <hr />
      <img src={lattemenu} alt='menu-pic' />
    </div>
  );
};

export default Menu;
