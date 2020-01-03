import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import carousel from '../styles/scss/carousel.module.scss';

const images = [
  'https://images.squarespace-cdn.com/content/v1/59557adc414fb588dd111e71/1498929892165-SHDYOHXWAOOLS9GPX7RB/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Latte+Luv-Latte+Luv-0141.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/59557adc414fb588dd111e71/1498930195718-23HZ6I5L8PPX6B0MQNAO/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Latte+Luv-Latte+Luv-0154.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/59557adc414fb588dd111e71/1498930775921-TYEY3NCQKWZ8CTQJ7DPV/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Latte+Luv-Latte+Luv-0162.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/59557adc414fb588dd111e71/1498930724176-XMV5IEO9K2RKF3X0JB86/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Latte+Luv-Latte+Luv-0023.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/59557adc414fb588dd111e71/1498930380662-4ZA1QVIA6Z655B4NX7BS/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Latte+Luv-Latte+Luv-0083.jpg?format=300w'
];

const Carousel = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className={carousel.container}>
      <Gallery
        className={carousel.style}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit='contain' key={image} src={image} />
        ))}
      </Gallery>
    </div>
  );
};

export default Carousel;
