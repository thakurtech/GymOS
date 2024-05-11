import React, { useState } from "react";
import {DietService,AddDietService} from "../../services/DietService";
import { useSelector } from "react-redux";
import LoadingBar from "../../components/LoadingBar/LoadingBar";


const DietRecommendation = () => {
  const token = useSelector((state) => state.loginSlice.token);
  const userId=useSelector(state=>state.loginSlice.userId);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [goal, setGoal] = useState("");
  const [addDescription, setAddDescription] = useState(false);
  const [description, setDescription] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [currentDiet, setCurrentDiet] = useState({});
  const [response, setResponse] = useState({});
  const [loadingToggle, setLoadingToggle] = useState(false);

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

  const handleAskAI = async (event) => {
    event.preventDefault();
    setLoadingToggle(true);
    // validate the inputs and send it to the diet service
    const userData = {
      weight,
      height,
      bodyType,
      goal,
      description,
    };
    const { response, data, msg } = await DietService(userData, token);
    if (response) {
      console.log(data);
      setResponse(data);
      setCurrentDiet(JSON.stringify(data));
      setShowResponse(true);

    } else {
      console.log(msg);
      setResponse({});
    }
    setLoadingToggle(false);
  };

  const handleAddDiet = async () => {
    setLoadingToggle(true);
    // setCurrentDiet(response);
    const { response, data, msg } = await AddDietService(currentDiet,userId, token);
    if (response) {
      console.log(msg);
    } else {
      console.log(msg);
    }
    setLoadingToggle(false);
  }
  return (
    <div className="flex items-center gap-2 flex-col justify-center w-full bg-zinc-100">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl">
        Diet Recommendation
      </h1>
      <form onSubmit={handleAskAI} className="w-3/12 mx-auto p-6 bg-zinc-100 ">
        <div className="mb-4">
          <label
            htmlFor="weight"
            className="block text-gray-700 font-bold mb-2"
          >
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
          <label
            htmlFor="height"
            className="block text-gray-700 font-bold mb-2"
          >
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
          <label
            htmlFor="bodyType"
            className="block text-gray-700 font-bold mb-2"
          >
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
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
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
      <LoadingBar toggle={loadingToggle} />
      {showResponse && (
      <div className="w-6/12 mx-auto p-6 bg-zinc-100 flex flex-col justify-center items-center">
        {response &&
          Object.keys(response).length &&
          Object.keys(response).map((category) => (
            <div key={category} className="mb-4">
              <h1 className="text-[#FD3D0D] text-2xl font-semibold mb-2">
                <strong>{category}:</strong>
              </h1>
              <table className="w-full bg-white rounded-md shadow-md">
                {/* Render the table header based on the category */}
                <thead>
                  <tr>
                    <th className="bg-[#FD3D0D] text-white p-2 rounded-tl-md rounded-bl-md w-1/2">
                      {category === "Drinks" ? "Drink" : "Food"}
                    </th>
                    <th className="bg-[#FD3D0D] text-white p-2 rounded-tr-md rounded-br-md w-1/2">
                      Quantity
                    </th>
                  </tr>
                </thead>
                {/* Render the table rows for each meal */}
                <tbody>
                  {response[category].map((meal, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="p-2 w-1/2">{meal.drink || meal.food}</td>
                      <td className="p-2 w-1/2">{meal.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <button
          type="button"
          className={` py-2 px-4 rounded-md focus:outline-none bg-[#FD3D0D] text-white hover:bg-orange-600 focus:bg-orange-600`}
          onClick={handleAddDiet}
        >
        Add as Current Diet
        </button>
      </div>
      )
      }
    </div>
  );
};

export default DietRecommendation;
