import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import carousel from "../styles/scss/carousel.module.scss";

const images = [
  "https://images.unsplash.com/photo-1521316917358-6de3e822ec96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",

  "https://images.unsplash.com/photo-1576788903709-5c3eda911324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",

  "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
];

const Carousel = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className={carousel.container}>
      <Gallery
        className={carousel.style}
        index={index}
        onRequestChange={(i) => {
          setIndex(i);
        }}
      >
        {images.map((image) => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    </div>
  );
};

export default Carousel;
