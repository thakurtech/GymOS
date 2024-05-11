// Your JSON string
let jsonString = ```{ "Breakfast": [ { "food": "Oatmeal with Berries and Nuts", "quantity": "1 cup cooked oatmeal + 1/2 cup mixed berries + 1/4 cup nuts" }, { "food": "Greek Yogurt", "quantity": "1 cup" }, { "food": "Eggs", "quantity": "2 scrambled eggs" } ], "Lunch": [ { "food": "Chicken Breast or Salmon", "quantity": "4oz grilled chicken breast or salmon" }, { "food": "Brown Rice or Quinoa", "quantity": "1/2 cup cooked" }, { "food": "Mixed Vegetables", "quantity": "1 cup" } ], "Dinner": [ { "food": "Lean Beef or Tofu", "quantity": "4oz lean beef or tofu" }, { "food": "Sweet Potato or Brown Rice", "quantity": "1 medium sweet potato or 1/2 cup cooked brown rice" }, { "food": "Broccoli or Asparagus", "quantity": "1 cup" } ], "Snacks": [ { "food": "Protein Smoothie", "quantity": "1 cup (made with protein powder, fruits, and spinach)" }, { "food": "Trail Mix", "quantity": "1/4 cup" }, { "food": "Fruits with Nut Butter", "quantity": "Apple or banana with 2 tablespoons almond butter or peanut butter" } ], "Drinks": [ { "food": "Water", "quantity": "8-10 glasses per day" }, { "food": "Milk or Soy Milk", "quantity": "2 glasses per day" } ] }```;

// Parse the JSON string to a JavaScript object
let jsonObject = JSON.parse(jsonString);

// Now you can access the JSON object as a JavaScript object
console.log(jsonObject.Breakfast);
console.log(jsonObject.Lunch);
console.log(jsonObject.Dinner);
console.log(jsonObject.Snacks);
console.log(jsonObject.Drinks);
