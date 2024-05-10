import React, { useState } from 'react';

const BMICalculator = () => {
  // State variables for weight, height, and BMI
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  // Function to calculate BMI
  const calculateBMI = () => {
    // Convert height from cm to m
    const heightInMeters = height / 100;

    // Calculate BMI
    const calculatedBMI = weight / (heightInMeters ** 2);

    // Determine BMI category
    let bmiCategory = '';
    if (calculatedBMI < 18.5) {
      bmiCategory = 'Underweight';
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }

    // Update state with calculated BMI and category
    setBMI(calculatedBMI.toFixed(2));
    setCategory(bmiCategory);
  };

  return (
    <div className="flex items-center flex-col justify-center w-full  bg-white">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl mb-6">
        Calculate BMI
      </h1>
      <div className="w-3/12 mx-auto p-6  rounded-md shadow-md">
        {/* Weight input */}
        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your weight in kg"
            required
          />
        </div>

        {/* Height input */}
        <div className="mb-4">
          <label htmlFor="height" className="block text-gray-700 font-bold mb-2">
            Height (cm):
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your height in cm"
            required
          />
        </div>

        {/* Calculate button */}
        <button
          onClick={calculateBMI}
          className="w-full py-2 px-4 rounded-md focus:outline-none bg-[#FD3D0D] text-white hover:bg-orange-600 focus:bg-orange-600"
        >
          Calculate
        </button>

        {/* Display calculated BMI and category */}
        {bmi && (
          <div className="mt-4">
            <p className="text-gray-700">
              <strong>BMI:</strong> {bmi}
            </p>
            <p className="text-gray-700">
              <strong>Category:</strong> {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
