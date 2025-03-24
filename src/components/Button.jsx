import React from "react";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, onMouseEnter }) => {
  return (
    <button 
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 
                  text-black bg-violet-50 transition-all duration-300 ease-in-out
                  hover:scale-105 hover:text-white hover:bg-gradient-to-r from-purple-500 to-violet-700 
                  before:absolute before:inset-0 before:bg-white/20 before:opacity-0 
                  before:transition-opacity before:duration-500 before:hover:opacity-100 
                  shadow-md hover:shadow-lg ${containerClass}`}
        onMouseEnter={onMouseEnter}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div className="">
            {title}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
