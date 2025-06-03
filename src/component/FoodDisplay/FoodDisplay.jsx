import { React, useContext, useState } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);
  console.log(foodList);

  return (
    <div className="food-display" id="food-display">
      <h2>top dishes in our menu</h2>
      <div className="food-display-list">
        {foodList.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

// import React, { useContext } from 'react'
// import './foodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../foodItem/FoodItem'

// const FoodDisplay = ({category})=> {

//     const {food_list}= useContext(StoreContext) ;

//   return (
//     <div className='food-display' id='food-display'>
//         <h2>Top dishes near you </h2>
//         <div className="food-display-list">
//             {food_list.map((item,index)=>{
//               if(category==="all" || category===item.category){
//                 return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
//               }
//             })}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay
