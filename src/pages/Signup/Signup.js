import React, { useState } from 'react';
import {signup} from '../../services/SignupService';
const SignUp = () => {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Form submission handler
  const handleSubmit = async(event) => {
    event.preventDefault();
    const { response, msg } = await signup(email, password,phone, "user");
    if (response) {
      console.log(msg);
        // Redirect to login page
        window.location.href = "/login";
    }
    else {
      console.log(msg);
      alert("Failed to sign up")
    }
  };

  return (
    <div className="flex items-center gap-10 flex-col justify-center w-full h-[100vh] bg-black">
      <h2 className="text-[35px] text-white font-bold md:text-[50px]">
        {" "}
        Sign up{" "}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-3/12 mx-auto p-6 bg-[#ebedeb] rounded-md shadow-md"
      >
        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-[#FD3D0D]  font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone number input */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-[#FD3D0D]  font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-[#FD3D0D] font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md focus:outline-none bg-[#FD3D0D] text-white hover:bg-orange-600 focus:bg-orange-600"
        >
          Sign Up
        </button>
        <p className='text-center my-4'>Already Registered?{" "} <a href="login" className='text-[#FD3D0D]'>Login</a></p>
      </form>
    </div>
  );
};

export default SignUp;
