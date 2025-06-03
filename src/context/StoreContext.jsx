import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";
import { baseUrl } from "../../config";
export const StoreContext = createContext("null");

const StoreContextProvider = (props) => {
  const [cartItem, SetCartItem] = useState({});
  const [foodList, setFood_List] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      SetCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const fetchFoodLIst = async () => {
    const response = await axios.get(`${baseUrl}/food/items`);
    setFood_List(response.data);
    console.log(foodList);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodLIst();
    }
    loadData();
  }, []);

  const contextValue = {
    foodList,
    cartItem,
    SetCartItem,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
