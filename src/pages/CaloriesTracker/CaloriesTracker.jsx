import React, { useState } from "react";
import CalorieCounterService from "../../services/CalorieCounterService";
function CaloriesTracker() {
  const [query, setQuery] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [error, setError] = useState(null);

  const fetchNutritionData = async () => {
    if (!query || query === "") return alert("Please enter a food item");
    try {
      const { response, msg } = await CalorieCounterService(query);
      if (response) {
        console.log(msg);
        setNutritionData(msg);
        setError(null);
      } else {
        setError(msg);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchNutritionData();
  };

  return (
    <div className="flex flex-col gap-5 items-center  p-4  h-full w-full">
      <h1 className="text-center font-semibold text-[#FD3D0D] mb-20 text-3xl">
        {" "}
        Calorie Tracker{" "}
      </h1>
      <form
        className="flex flex-col gap-11 mb-10 w-3/12 "
        onSubmit={handleSubmit}
      >
        <input
          className="px-1 py-1 text-lg border border-gray-400 focus:border-[#FD3D0D] "
          type="text"
          placeholder="Enter Food"
          value={query}
          required
          onChange={handleQueryChange}
        />
        <button
          className="bg-[#FD3D0D] text-white hover:scale-95 py-2 px-3 rounded-lg w-fit"
          type="submit"
        >
          Get Nutrient Info{" "}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {nutritionData && (
        <div className="flex gap-10">
          {nutritionData.items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white  bg-opacity-25 backdrop-filter backdrop-blur-md p-4 rounded-xl mb-4 shadow-lg"
            >
              <h3 className="uppercase font-bold text-orange-600 ">
                {item.name}
              </h3>
              <p>
                Serving Size:{" "}
                <span className="text-orange-400"> {item.serving_size_g} g</span>{" "}
              </p>
              <p>
                Protein:{" "}
                <span className="text-orange-400"> {item.protein_g} g</span>{" "}
              </p>
              <p>
                Carbohydrate:{" "}
                <span className="text-orange-400">
                  {item.carbohydrates_total_g} g
                </span>
              </p>
              <p>
                Sugar:{" "}
                <span className="text-orange-400"> {item.sugar_g} g</span>{" "}
              </p>
              <p>
                Calories:{" "}
                <span className="text-orange-400">{item.calories}</span>{" "}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CaloriesTracker;
