import React, { useState } from 'react';
interface Image {
  src: string;
  alt: string;
}

const FullscreenImage: React.FC<Image> = ({ src, alt }) => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div
      className={`flex h-full items-center justify-center rounded-md bg-black transition ${
        fullscreen
          ? 'fixed left-0 top-0 z-50 h-screen w-screen rounded-none bg-opacity-80 '
          : ' bg-white bg-opacity-100'
      }`}
      onClick={toggleFullscreen}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full cursor-pointer rounded-md ${
          fullscreen ? 'h-auto w-full md:w-2/3  ' : 'h-full'
        }`}
        onClick={toggleFullscreen}
      />
    </div>
  );
};

export default FullscreenImage;
