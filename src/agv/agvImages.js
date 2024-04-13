import carImage from '../shared/images/car.png';

const init = {};

const imageSrc = {
  carImage,
};

const AgvImages = Object.entries(imageSrc).reduce(
  (images, [key, src]) => {
    const image = new Image();
    image.src = src;
    images[key] = image;
    return images;
  },
  init
);

export default AgvImages;
