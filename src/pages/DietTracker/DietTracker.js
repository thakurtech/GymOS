import React, { useEffect, useState } from 'react';
import { GetDietService,DeleteDietService } from '../../services/DietService';
import { useSelector } from 'react-redux';
const DietTracker = () => {
  const userId=useSelector(state=>state.loginSlice.userId);
  const token=useSelector(state=>state.loginSlice.token);
  const [response, setResponse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { response, data, msg } = await GetDietService(token,userId);
      if (response && data) {
        console.log(data);
        setResponse(JSON.parse(data));
      } else {
        console.log(msg);
      }
    };
    fetchData();
  }
  , []);

  
  // Initial state for the current diet
  // const [diet, setDiet] = useState({
  //   meals: [
  //     { id: 1, meal: 'Breakfast', description: 'Oatmeal with fruits' },
  //     { id: 2, meal: 'Lunch', description: 'Grilled chicken with vegetables' },
  //     { id: 3, meal: 'Dinner', description: 'Salmon with rice and salad' },
  //   ],
  // });

  // Handler for editing the diet
  const handleEditDiet = (mealId) => {
    // Implement the logic to edit the diet for the given meal ID
    console.log(`Edit diet for meal ID: ${mealId}`);
    // Perform actions such as opening an edit form or redirecting to an edit page
  };

  // Handler for deleting the diet
  const handleDeleteDiet = async() => {
    // Implement the logic to delete the diet
    console.log('Deleting diet...');
    const { response, msg } = await DeleteDietService(userId,token);
    if (response) {
      console.log(msg);
      setResponse({});
    } else {
      console.log(msg);
    }
    
  };

  // Handler for asking AI for advice
  const handleAskAI = () => {
    window.location.href='/user/diet-recommendation';
  };

  return (
    <div className="flex items-center gap-10 flex-col justify-center w-full  ">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl">
        Diet Tracker
      </h1>
      <div className="flex items-center gap-10 flex-col justify-center w-8/12 mx-auto p-6  rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Current Diet</h2>
        <div className="w-8/12 mx-auto p-6 bg-zinc-100 flex flex-col justify-center items-center">
        {response &&
          Object.keys(response).length &&
          Object.keys(response).map((category) => (
            <div key={category} className="mb-4">
              <h1 className="text-[#FD3D0D] text-2xl font-semibold mb-2">
                <strong>{category}:</strong>
              </h1>
              <table className="w-full bg-white rounded-md shadow-md">
                {/* Render the table header based on the category */}
                <thead className='w-full'>
                  <tr className='w-full'>
                    <th className="bg-[#FD3D0D] text-white p-2 rounded-tl-md rounded-bl-md w-1/2">
                      {category === "Drinks" ? "Drink" : "Food"}
                    </th>
                    <th className="bg-[#FD3D0D] text-white p-2 rounded-tr-md rounded-br-md w-1/2">
                      Quantity
                    </th>
                  </tr>
                </thead>
                {/* Render the table rows for each meal */}
                <tbody className='w-full'>
                  {response[category].map((meal, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100 w-full">
                      <td className="p-2 w-1/2">{meal.drink || meal.food}</td>
                      <td className="p-2 w-1/2">{meal.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        
        </div>
        <div className="flex gap-4">
          <button
            className="bg-[#FD3D0D] text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:bg-orange-600"
            // onClick={() => handleEditDiet(diet.meals[0].id)}
          >
            Edit
          </button>
          <button
            className="bg-[#FD3D0D] text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:bg-orange-600"
            onClick={() => handleDeleteDiet()}
          >
            Delete
          </button>
          <button
            className="bg-[#FD3D0D] text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:bg-orange-600"
            onClick={handleAskAI}
          >
            Ask AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietTracker;
