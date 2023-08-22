import React from 'react';

interface HeadingProps {
  title: string;
  size?: string;
}
const Heading: React.FC<HeadingProps> = ({ title, size }) => {
  return (
    <p className={`mb-1 ${size ? size : 'text-lg'} font-bold text-gray-700`}>
      {title}
    </p>
  );
};

export default Heading;
