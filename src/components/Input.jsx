import React from 'react';

export const Input = React.forwardRef(({ icon, labelText, inputType, inputId, inputPlaceholder, isValid }, ref) => {
  return (
    <div className="w-full relative">
      <label htmlFor={inputId} className="text-sm font-medium">{labelText}</label>
      <div className="w-full relative">
        <img className="absolute top-3 left-3 w-5 h-5" src={icon} alt="icon" />
        <input
          ref={ref}
          id={inputId}
          className={`border border-solid ${isValid ? 'border-[#00000080]' : 'border-red-500'} w-full rounded-3xl py-2 pl-10 focus:outline-none`}
          placeholder={inputPlaceholder}
          type={inputType}
        />
        {!isValid && <span className="text-red-500 text-sm absolute -bottom-5 left-3">*Please fill this input</span>}
      </div>
    </div>
  );
});
