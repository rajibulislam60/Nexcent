import React from 'react'
import Images from './images/blog1.png'

const BlogItem = () => {
  return (
    <div className=''>
      <div className='relative'>
        <img src={Images} alt="" className='relative'/>
        <div className='w-[200px] bg-para text-white absolute '>
        <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
        <h4>Readmore</h4>
      </div>
      </div>
      
    </div>
  );
}

export default BlogItem