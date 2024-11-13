import React, { useEffect } from 'react'
import {food_list} from '../../Food_list/assets/assets.js'
import axios from "axios"

const AutoAdd = () => {
    const url = "http://localhost:4000";

    const autoFoodAdd = async () => {
        // Iterate over each food item in food_list
        for (const foodItem of food_list) {
          const formData = new FormData();
      
          formData.append("name", foodItem.name);
          formData.append("description", foodItem.description);
          formData.append("price", foodItem.price);
          formData.append("category", foodItem.category);
      
          try {
            // Fetch the image from an accessible URL
            const res = await fetch(foodItem.image);
            
            if (!res.ok) {
              throw new Error(`Failed to fetch image: ${res.statusText}`);
            }
            
            const blob = await res.blob();
      
            // Extract the file name dynamically
            const filePath = foodItem.image;
            const fileName = filePath.split('/').pop();
      
            // Create a new File object from the blob
            const file = new File([blob], fileName, { type: blob.type });
            
            formData.append("image", file); // Append the image as a file
      
            // Send the form data
            const response = await axios.post(`${url}/api/food/add`, formData);
      
            if (response.data.success) {
              console.log("Success for", foodItem.name);
            } else {
              console.log("Failed for", foodItem.name);
            }
          } catch (error) {
            console.error("Error in autoFoodAdd for", foodItem.name, ":", error);
          }
        }
      };
      
      useEffect(() => {
        autoFoodAdd();
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default AutoAdd
