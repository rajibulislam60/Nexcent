import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1>Rajibul</h1>
      <div>
        <Button
          name="signup"
          className="hover:bg-white hover:border hover:border-primary duration-[0.4s] hover:text-primary"
        />
      </div>
    </div>
  );
}

export default Navbar