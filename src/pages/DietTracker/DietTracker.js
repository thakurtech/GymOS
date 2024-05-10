import React, { useState } from 'react';

const DietTracker = () => {
  // Initial state for the current diet
  const [diet, setDiet] = useState({
    meals: [
      { id: 1, meal: 'Breakfast', description: 'Oatmeal with fruits' },
      { id: 2, meal: 'Lunch', description: 'Grilled chicken with vegetables' },
      { id: 3, meal: 'Dinner', description: 'Salmon with rice and salad' },
    ],
  });

  // Handler for editing the diet
  const handleEditDiet = (mealId) => {
    // Implement the logic to edit the diet for the given meal ID
    console.log(`Edit diet for meal ID: ${mealId}`);
    // Perform actions such as opening an edit form or redirecting to an edit page
  };

  // Handler for deleting the diet
  const handleDeleteDiet = (mealId) => {
    // Implement the logic to delete the diet for the given meal ID
    console.log(`Delete diet for meal ID: ${mealId}`);
    // Perform actions such as showing a confirmation dialog and then deleting the diet
  };

  // Handler for asking AI for advice
  const handleAskAI = () => {
    // Implement the logic to ask AI for diet advice
    console.log('Asking AI for diet advice...');
    // Perform actions such as sending the current diet data to an AI service
  };

  return (
    <div className="flex items-center gap-10 flex-col justify-center w-full  ">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl">
        Diet Tracker
      </h1>
      <div className="w-3/12 mx-auto p-6  rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Current Diet</h2>
        <ul className="mb-4">
          {diet.meals.map((meal) => (
            <li key={meal.id} className="mb-2">
              <strong>{meal.meal}:</strong> {meal.description}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button
            className="bg-[#FD3D0D] text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:bg-orange-600"
            onClick={() => handleEditDiet(diet.meals[0].id)}
          >
            Edit
          </button>
          <button
            className="bg-[#FD3D0D] text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:bg-orange-600"
            onClick={() => handleDeleteDiet(diet.meals[0].id)}
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
