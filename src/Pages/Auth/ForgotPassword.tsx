import SidePanel from "@/components/Login/SidePanel";
import { useState } from "react";

function ForgotPassword() {
  return (
    <div className="flex h-screen">
      <Form/>
      <SidePanel />
    </div>
  );
}

export default ForgotPassword;



function Form() {
    const [email, setEmail] = useState('');

  const isDisabled =  !email;

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center w-full md:w-1/2 p-10">
     
      <img
        src="/image/forgot-password.png"
        alt="illustration"
        className="mx-auto md:mb-10 mb-8"
      />
       <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
      <p className="md:mb-7 mb-5 font-normal text-base text-[#797979]">
      Enter your email for the verification proccess,we will send 4 digits code to your email.
      </p>
      <form onSubmit={handleLogin}>
      <div className="md:mb-5 mb-3">
          <label className="block text-base font-normal md:mb-3 mb-2">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email@emailer.com"
            className="w-full text-base font-normal p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
          />
        </div>
        <button
          type="submit"
          className={`w-full text-white p-3 rounded-lg font-semibold transition ease-out duration-300 ${
            isDisabled
              ? 'bg-[#A1A1A1] cursor-not-allowed'
              : 'bg-gradient-to-t from-[#020202] to-[#0E1D33]'
          }`}
          disabled={isDisabled}
        >
        Continue
        </button>
      </form>
    </div>
  );
};

