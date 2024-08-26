import React from 'react'

const Button = ({name, className}) =>{
    return (
      <div className={`bg-primary text-white px-[32px] py-[14px] ${className} rounded-[6px] border border-primary`}>{name}</div>
    );
}

export default Button;