import backgroundImg from "./assets/background.svg";
import logo from "./assets/Logo.svg";
import { Form } from "./components/Form";
import googleIcon from "./assets/google-frame.svg";
import facebookIcon from "./assets/facebook-frame.svg";
import appleIcon from "./assets/apple-frame.svg";
import { useState } from "react";

function App() {
  const [isLogin, setLogin] = useState(false)
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="md:w-1/2 h-1/2 md:h-screen bg-white md:bg-[#E9F8E5] shadow-[105px_198px_90px_rgba(0,0,0,0.03),59px_111px_76px_rgba(0,0,0,0.09),26px_49px_56px_rgba(0,0,0,0.15),7px_12px_31px_rgba(0,0,0,0.18)]">
        <img src={logo} className="md:hidden md:w-[100px] block mx-auto mt-10" alt="Logo" width="80px" />
        <img src={backgroundImg} alt="Background image" className="w-[50%] md:w-[62.5%] mx-auto md:mt-[25%]" />
      </div>
      <div className="md:w-1/2 h-1/2 md:h-screen bg-[#FCFEFF] flex items-center justify-center">
        <div className="flex flex-col gap-6 w-[90%] md:w-[80%] mx-auto h-[80%] md:h-[70%] items-center justify-center rounded-t-[25px] md:rounded-l-[25px]">
          <img src={logo} className="hidden md:w-[100px] md:flex " alt="Logo" width="80px" />
          <h1 className="text-xl md:text-2xl font-semibold">{isLogin? "Log in to your account": "Create Account"}</h1>
          <Form isLogin={isLogin} />
          <span className="text-gray-500">- OR -</span>
          <div className="flex flex-row gap-3">
            <img src={googleIcon} alt="Google Icon" className="w-8 h-8" />
            <img src={facebookIcon} alt="Facebook Icon" className="w-8 h-8" />
            <img src={appleIcon} alt="Apple Icon" className="w-8 h-8" />
          </div>
          <span className="text-sm mb-10">
            {isLogin? "Don't have an account yet?": "Already have an account?"} <a onClick={()=>setLogin(!isLogin)} href="#" className="text-green-600">{isLogin? "Sing in": "Login"}</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
