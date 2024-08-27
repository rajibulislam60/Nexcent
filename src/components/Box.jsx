import React from 'react'

const Box = ({ itemName, itemPera, itemImg, alt }) => {
  return (
    <div className="w-[299px] px-6 py-6 border rounded-md hover:shadow-xl text-center mx-auto group transition-all duration-300 ease-in-out hover:w-[319px]">
      <img className='mx-auto' src={itemImg} alt={alt} />
      <h3 className="text-[28px] font-bold leading-[36px] text-secondary mt-4">
        {itemName}
      </h3>
      <p className="text-[14px] font-mormal leading-[20px] text-pera mt-2">
        {itemPera}
      </p>
    </div>
  );
};

export default Box