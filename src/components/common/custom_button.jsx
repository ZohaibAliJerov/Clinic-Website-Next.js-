import React from 'react';

const button = (props) => {
  const baseClasses = 'border text-[20px] px-3 py-2';
  const colorClasses = {
    white: 'text-black bg-white hover:bg-[#5E5E3C] hover:text-white',
    golden:
      'text-white bg-[#5E5E3C] hover:bg-white hover:text-[#5E5E3C] hover:border-[#5E5E3C]',
  };

  return (
    <button
      className={`${baseClasses} ${
        colorClasses[props.color] || 'bg-gray-500 hover:bg-gray-700'
      }`}
    >
      {props.btnText}
    </button>
  );
};

export default button;
