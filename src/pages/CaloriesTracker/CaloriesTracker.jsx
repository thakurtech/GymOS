import React, { useState } from "react";
import CalorieCounterService from "../../services/CalorieCounterService";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
function CaloriesTracker() {
  const [query, setQuery] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [error, setError] = useState(null);
  const [loadingToggle, setLoadingToggle] = useState(false);

  const fetchNutritionData = async () => {

    if (!query || query === "") return alert("Please enter a food item");
    setLoadingToggle(true);
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
    setLoadingToggle(false);
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
      <LoadingBar loadingToggle={loadingToggle} />
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
              <h3 className="uppercase font-bold text-orange ">
                {item.name}
              </h3>
              <p className="text-black">
                Serving Size:{" "}
                <span className="text-orange"> {item.serving_size_g} g</span>{" "}
              </p>
              <p className="text-black">
                Protein:{" "}
                <span className="text-orange"> {item.protein_g} g</span>{" "}
              </p>
              <p className="text-black">
                Carbohydrate:{" "}
                <span className="text-orange">
                  {item.carbohydrates_total_g} g
                </span>
              </p>
              <p className="text-black">
                Sugar:{" "}
                <span className="text-orange"> {item.sugar_g} g</span>{" "}
              </p>
              <p className="text-black">
                Calories:{" "}
                <span className="text-orange">{item.calories}</span>{" "}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CaloriesTracker;
