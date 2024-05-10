import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUtensils, FaCalculator, FaDollarSign, FaStar, FaDumbbell } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineCurrencyDollar } from 'react-icons/hi';

const UserDashboard = () => {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (path) => {
    window.location.href=path
  };

  return (
    <div className="flex flex-col items-center w-full  bg-white">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-4 w-2/4 mx-auto ml-auto">
        {/* Calorie Tracker */}
        <div
          className="flex flex-col items-center bg-zinc-100 p-4 rounded-md shadow-md hover:cursor-pointer hover:bg-gray-200"
          onClick={() => handleNavigate('calorie-tracker')}
        >
          <FaUtensils size={40} className="text-[#FD3D0D]" />
          <p className="mt-2 text-gray-700">Calorie Tracker</p>
        </div>

        {/* Your Diet */}
        <div
          className="flex flex-col items-center bg-zinc-100 p-4 rounded-md shadow-md hover:cursor-pointer hover:bg-gray-200"
          onClick={() => handleNavigate('your-diet')}
        >
          <FaDumbbell size={40} className="text-[#FD3D0D]" />
          <p className="mt-2 text-gray-700">Your Diet</p>
        </div>

        {/* Diet Recommendation */}
        <div
          className="flex flex-col items-center bg-zinc-100 p-4 rounded-md shadow-md hover:cursor-pointer hover:bg-gray-200"
          onClick={() => handleNavigate('diet-recommendation')}
        >
          <HiOutlineDocumentText size={40} className="text-[#FD3D0D]" />
          <p className="mt-2 text-gray-700">Diet Recommendation</p>
        </div>

        {/* Do Payment */}
        <div
          className="flex flex-col items-center bg-zinc-100 p-4 rounded-md shadow-md hover:cursor-pointer hover:bg-gray-200"
          onClick={() => handleNavigate('payment')}
        >
          <HiOutlineCurrencyDollar size={40} className="text-[#FD3D0D]" />
          <p class="mt-2 text-gray-700">Do Payment</p>
        </div>

        {/* Rewards */}
        <div
          className="flex flex-col items-center bg-zinc-100 p-4 rounded-md shadow-md hover:cursor-pointer hover:bg-gray-200"
          onClick={() => handleNavigate('rewards')}
        >
          <FaStar size={40} className="text-[#FD3D0D]" />
          <p className="mt-2 text-gray-700">Rewards</p>
        </div>

        {/* Calculate BMI */}
        <div
          className="flex flex-col items-center bg-zinc-100 p-4 rounded-md shadow-md hover:cursor-pointer hover:bg-gray-200"
          onClick={() => handleNavigate('calculate-bmi')}
        >
          <FaCalculator size={40} className="text-[#FD3D0D]" />
          <p className="mt-2 text-gray-700">Calculate BMI</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
