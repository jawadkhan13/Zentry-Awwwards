import React from "react";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, onMouseEnter }) => {
  return (
    <button 
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
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
