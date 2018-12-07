import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = (src) => (
  <div>
    <LazyLoadImage

      src={src} // use normal <img> attributes as props
/>
  </div>
);

export default MyImage;
