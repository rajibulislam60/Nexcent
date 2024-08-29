import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const BlogItem = ({ itemDetails, src, alt, className }) => {
  return (
    <div className="">
      <div className={`relative w-[368px] ${className}`}>
        <img src={src} alt={alt} className="relative w-full" />
        <div className="w-[80%] text-center bg-[#F5F7FA] text-white absolute bottom-[-50%] left-[50%] translate-x-[-50%] px-[16px] py-[16px] rounded-md">
          <h3 className="text-[20px] font-semibold leading-[28px] text-secondary">
            {itemDetails}
          </h3>
          <div className="text-[20px] font-semibold leading-[28px] text-primary mt-6 mb-2 flex gap-2 items-center justify-center">
            <h4>Readmore</h4>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem