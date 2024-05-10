import React, { useState } from 'react';
import DietService from "../../services/DietService";
import { useSelector } from 'react-redux';
const DietRecommendation = () => {
  const token = useSelector((state) => state.loginSlice.token);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [goal, setGoal] = useState('');
  const [addDescription, setAddDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [response,setResponse]=useState("");

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleBodyTypeChange = (event) => {
    setBodyType(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleAddDescriptionChange = (event) => {
    setAddDescription(event.target.checked);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAskAI = async(event) => {
    event.preventDefault();
    // validate the inputs and send it to the diet service
    const userData = {
      weight,
      height,
      bodyType,
      goal,
      description,
    };
    const { response,data, msg } = await DietService(userData,token);
    if (response) {
      console.log(data);
      setResponse(data);
    }
    else{
      console.log(msg);
      setResponse("AI is not availabe at the moment");
    }

  };

  return (
    <div className="flex items-center gap-10 flex-col justify-center w-full  bg-zinc-100">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl">
        Diet Recommendation
      </h1>
      <form onSubmit={handleAskAI} className="w-3/12 mx-auto p-6 bg-zinc-100 ">
        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
            Weight (in kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your weight"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="height" className="block text-gray-700 font-bold mb-2">
            Height (in cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
            placeholder="Enter your height"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bodyType" className="block text-gray-700 font-bold mb-2">
            Body Type
          </label>
          <select
            id="bodyType"
            value={bodyType}
            onChange={handleBodyTypeChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
          >
            <option value="">Select your body type</option>
            <option value="skinny">Skinny</option>
            <option value="average">Average</option>
            <option value="muscular">Muscular</option>
            <option value="fat">Fat</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="goal" className="block text-gray-700 font-bold mb-2">
            Goal
          </label>
          <select
            id="goal"
            value={goal}
            onChange={handleGoalChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
          >
            <option value="">Select your goal</option>
            <option value="weight loss">Weight Loss</option>
            <option value="weight gain">Weight Gain</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="fat loss">Fat Loss</option>
            <option value="bulking">Bulking</option>
            <option value="cutting">Cutting</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="addDescription"
            checked={addDescription}
            onChange={handleAddDescriptionChange}
            className="mr-2"
          />
          <label htmlFor="addDescription" className="text-gray-700">
            Add Description
          </label>
        </div>
        {addDescription && (
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#FD3D0D]"
              placeholder="Describe your goal..."
            ></textarea>
          </div>
        )}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md focus:outline-none bg-[#FD3D0D] text-white hover:bg-orange-600 focus:bg-orange-600`}
        >
          Ask AI
        </button>
      </form>
      <div className="w-10/12 mx-auto p-6 bg-zinc-100">
        <p className="text-left text-gray-700">{response}</p>
      </div>
    </div>
  );
};

export default DietRecommendation;
