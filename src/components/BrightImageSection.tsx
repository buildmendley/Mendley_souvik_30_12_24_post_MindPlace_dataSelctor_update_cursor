import React from 'react';

const BrightImageSection = () => {
  return (
    <section className="w-full max-w-[2000px] mx-auto overflow-hidden">
      <div className="h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9"
          alt="Young person smiling while looking at their phone"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default BrightImageSection;