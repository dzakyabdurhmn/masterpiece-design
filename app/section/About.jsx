import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transform transition-transform ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ minWidth: '100%', flex: 'none' }}
            >
              <img src={image} alt={`Slide ${index + 1}`} className="block w-full" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-12 bg-black bg-opacity-25 text-white"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-12 bg-black bg-opacity-25 text-white"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

// Contoh penggunaan:
const images = [
  'https://via.placeholder.com/800x400/ff0000/ffffff',
  'https://via.placeholder.com/800x400/00ff00/ffffff',
  'https://via.placeholder.com/800x400/0000ff/ffffff',
];

const App = () => {
  return (
    <div className="container mx-auto mt-4">
      <Carousel images={images} />
    </div>
  );
};

export default App;
