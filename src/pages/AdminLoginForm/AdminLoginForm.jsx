import React, { useState } from "react";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { login } from "../../services/LoginService";
import {useDispatch} from "react-redux";
import {setLoginTime,setIsAuthenticated,setUserRole,setUserId,setToken} from "../../store/loginSlice";


function AdminLoginForm() {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordValidation, setShowPasswordValidation] = useState(false);
  const [showEmailValidation, setShowEmailValidation] = useState(false);


  const handleEmailChange = (e) => {
    setShowEmailValidation(true);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setShowPasswordValidation(true);
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
    setRole("");
    // alert("Form Submited Sucessfully")
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("role: ", role);

    const { response, msg } = await login(email, password, role);
    if (response) {
      console.log(msg);
      if (role==="admin") {
        
        dispatch(setLoginTime(Date.now()));
        dispatch(setIsAuthenticated(true));
        dispatch(setUserRole(role));
        dispatch(setToken(msg.tokens.access.token));
        dispatch(setUserId(msg.user._id));
        window.location.href = "/admin/dashboard";
        

      }
      else if (role==="user") {
        
        dispatch(setLoginTime(Date.now()));
        dispatch(setIsAuthenticated(true));
        dispatch(setUserRole(role));
        dispatch(setToken(msg.tokens.access.token))
        dispatch(setUserId(msg.user._id));
        window.location.href = "/user/calorie-tracker";
      }
    } else {
      console.log(msg);
    }
  };
  const isPasswordValid = password.length >= 8;
  // check if the email is valid using regex pattern
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return (
    <div className="flex items-center gap-10 flex-col justify-center w-full h-[100vh] bg-[#151C23]">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl">
        {" "}
        Gym Login{" "}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-3/12 mx-auto p-6 bg-zinc-100 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your email"
            required
          />
        </div>
        {!isEmailValid && showEmailValidation && (
          <p className="text-red-500 text-sm mt-2">Email must be valid</p>
        )}
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="absolute top-8 right-2 px-3 py-2"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? (
              <HiMiniEyeSlash className="h-6 w-6 text-gray-600" />
            ) : (
              <HiMiniEye className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
        {!isPasswordValid && showPasswordValidation && (
          <p className="text-red-500 text-sm mt-2">
            Password must be at least 8 characters long.
          </p>
        )}
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none  focus:border-[#FD3D0D]"
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md focus:outline-none ${
            isPasswordValid
              ? "bg-[#FD3D0D] text-white hover:bg-orange-600 focus:bg-orange-600"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!isPasswordValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminLoginForm;
