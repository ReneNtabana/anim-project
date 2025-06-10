import React from 'react';

const Button = ({ title, id, rightIcon, leftIcon, containerclass }) => {
  return (
    <button
      id={id}
      className={`group flex gap-1 relative z-10 w-fit overflow-hidden rounded-full cursor-pointer bg-violet-50 px-7 py-3 text-black ${containerclass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
