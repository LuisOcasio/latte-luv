import React from 'react';
import menu from '../images/lattemenu.jpg';
import sandwhich from '../images/latteluv-sandwhich.jpg';
import lattemenu from '../images/latte&menu.jpg';
import latte from '../images/caramel-latte.jpg';

const Menu = () => {
  return (
    <div className='menu-page'>
      <div className='menu'>
        <img className='latteluv-menu' src={menu} alt='menu-pic' />
      </div>

      <div className='menu-title'>
        The taste of a rich, smooth espresso drink, combined with steamed,
        creamy milk, and the best of chocolates-Ghirardelli, along with our
        quality Monin syrups...How can you resist? It's a taste of Paradise!
      </div>

      <hr />

      <div className='bottom-section'>
        <img src={lattemenu} alt='breakfast sandwhich' />
        <img src={sandwhich} alt='breakfast sandwhich' />
        <img src={latte} alt='breakfast sandwhich' />
      </div>

      <footer>
        "Here to serve you your coffee with "latte luv"
        <span role='img' aria-label='latte'>
          ☕
        </span>
      </footer>
    </div>
  );
};

export default Menu;
