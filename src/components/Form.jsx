import React, { useRef, useState } from 'react';
import userIcon from "../assets/user-icon.svg";
import mailIcon from "../assets/mail-icon.svg";
import passwordIcon from "../assets/password-icon.svg";
import { Input } from './Input';

export const Form = ({isLogin}) => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [validation, setValidation] = useState({
    fullname: true,
    email: true,
    password: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = {
      fullname: isLogin? "No need for that": fullNameRef.current.value !== "",
      email: emailRef.current.value !== "",
      password: passwordRef.current.value !== "",
    };

    setValidation(isValid);

    if (Object.values(isValid).every(Boolean)) {
      window.location.href = "https://www.youtube.com/watch?v=04854XqcfCY";
    }
  };

  return (
    <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
      {!isLogin && <Input
        ref={fullNameRef}
        inputType="text"
        inputPlaceholder="Enter Full Name"
        inputId="fullname"
        labelText="Full Name"
        icon={userIcon}
        isValid={validation.fullname}
      />}
      <Input
        ref={emailRef}
        inputType="email"
        inputPlaceholder="Enter Your Email"
        inputId="email"
        labelText="Email"
        icon={mailIcon}
        isValid={validation.email}
      />
      <Input
        ref={passwordRef}
        inputType="password"
        inputPlaceholder="Enter Your Password"
        inputId="password"
        labelText="Password"
        icon={passwordIcon}
        isValid={validation.password}
      />
      <input
        className="w-full bg-[#73895D] text-white rounded-xl py-2 cursor-pointer"
        type="submit"
        value={isLogin? "Log in": "Sign-Up"}
      />
    </form>
  );
};
