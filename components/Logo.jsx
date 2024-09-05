import React from 'react';
import Image from 'next/image'; // Importing Image from next/image
import logoImg from '../public/logo.webp'; // Import the image with a different name

const Logo = () => {
  return (
    <div>
      {/* Use Image component for optimized image rendering */}
      <Image src={logoImg} alt="Logo" width={40} height={40} className=' rounded-md' />
    </div>
  );
};

export default Logo;
