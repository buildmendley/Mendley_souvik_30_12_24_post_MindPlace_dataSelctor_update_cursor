import React from 'react';

const ImageSection = () => {
  return (
    <section className="w-full max-w-[2000px] mx-auto overflow-hidden">
      <div className="h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
          alt="Group of diverse young people laughing and enjoying time together"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ImageSection;