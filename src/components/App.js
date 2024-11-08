import React, { useEffect, useState } from "react";
import './../styles/App.css';

// const images = [
  
// ];

const App = () => {
  const [images, setImages] = useState([
    'https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg',
  'https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg',
  'https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/MQ6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg'
  ]);

  const [currentImage, setCurrentImage] = useState(images[0]);


  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage(oldImage => {
      const newIndex = images.indexOf(oldImage) + 1;
      return images[newIndex % images.length];
    });
  }, 5000);

  return () => clearInterval(timer);  // This will clear the interval when the component unmounts.
}, [images]);

return (
  <img src={currentImage} alt="slideshow" />
);
};

export default App;
