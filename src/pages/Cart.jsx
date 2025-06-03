// import React, { useContext } from "react";
// import { StoreContext } from "../context/storeContext";
// import "./Cart.css";
// const Cart = () => {
//   const { cartItem, food_list, removeFromCart } = useContext(StoreContext);
//   return (
//     <div className="cart">
//       <div className="cart-item">
//         <div className="cart-item-title">
//           <p>items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>items</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItem[item._id] > 0) {
//             return (
//               <div className="cart-items-title cart-items-item">
//                 <img src={item.image} />
//                 <p>{item.name}</p>
//                 <p>{item.price}</p>
//                 <p>{cartItem[item._id]}</p>
//                 <p>{item.price * cartItem[item._id]}</p>
//                 <p>x</p>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cart;
// import React, { useContext } from "react";
// import { StoreContext } from "../context/storeContext";

// const Cart = () => {
//   const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

//   const deliveryFee = 2;

//   const subtotal = food_list.reduce((acc, item) => {
//     return acc + item.price * (cartItem[item._id] || 0);
//   }, 0);

//   const total = subtotal + deliveryFee;

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

//       <div className="hidden md:grid grid-cols-7 gap-4 text-sm font-semibold border-b pb-3 mb-4 text-gray-600">
//         <p className="col-span-1">Image</p>
//         <p className="col-span-2">Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>

//       {food_list.map((item) => {
//         if (cartItem[item._id] > 0) {
//           return (
//             <div
//               key={item._id}
//               className="grid grid-cols-2 md:grid-cols-7 items-center gap-4 border-b py-4"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-16 h-16 object-cover rounded-md"
//               />
//               <p className="md:col-span-2">{item.name}</p>
//               <p className="hidden md:block">₹{item.price}</p>
//               <p className="hidden md:block">{cartItem[item._id]}</p>
//               <p className="hidden md:block">
//                 ₹{item.price * cartItem[item._id]}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="text-red-500 hover:text-red-700 text-sm"
//               >
//                 Remove
//               </button>
//             </div>
//           );
//         }
//         return null;
//       })}

//       {/* Cart Summary */}
//       <div className="!mt-10 bg-gray-50 !p-6 rounded-lg shadow-md max-w-md !ml-auto">
//         <h2 className="text-xl font-semibold !mb-4">Cart Summary</h2>
//         <div className="flex justify-between !mb-2 text-sm">
//           <span>Subtotal</span>
//           <span>₹{subtotal.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between !mb-2 text-sm">
//           <span>Delivery Fee</span>
//           <span>₹{deliveryFee.toFixed(2)}</span>
//         </div>
//         <hr className="!my-3" />
//         <div className="flex justify-between font-bold text-base !mb-4">
//           <span>Total</span>
//           <span>₹{total.toFixed(2)}</span>
//         </div>
//         <button className="w-full bg-green-600 text-white !py-2 rounded hover:bg-green-700 transition">
//           PROCEED TO CHECKOUT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItem, foodList, removeFromCart } = useContext(StoreContext);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isApplied, setIsApplied] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const deliveryFee = 2;

  const subtotal = foodList.reduce((acc, item) => {
    return acc + item.price * (cartItem[item._id] || 0);
  }, 0);

  const totalBeforeDiscount = subtotal + deliveryFee;
  const finalTotal = totalBeforeDiscount - discount;

  const handleApplyPromo = () => {
    const code = promoCode.trim().toLowerCase();

    if (code === "save10") {
      const discountAmount = subtotal * 0.1;
      setDiscount(discountAmount);
      setIsApplied(true);
      setError("");
    } else {
      setDiscount(0);
      setIsApplied(false);
      setError("Invalid promo code");
    }
  };

  return (
    <div className="!p-6 !max-w-6xl !mx-auto">
      <h2 className="text-2xl font-semibold !mb-6">Shopping Cart</h2>

      <div className="hidden md:grid grid-cols-7 gap-4 text-sm font-semibold border-b !pb-3 !mb-4 text-gray-600">
        <p className="col-span-1">Image</p>
        <p className="col-span-2">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {foodList.map((item) => {
        if (cartItem[item._id] > 0) {
          return (
            <div
              key={item._id}
              className="grid grid-cols-2 md:grid-cols-7 items-center gap-4 border-b !py-4"
            >
              <img
                src={`http://localhost:3000/uploads/${item.image}`}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <p className="md:col-span-2">{item.name}</p>
              <p className="hidden md:block">₹{item.price}</p>
              <p className="hidden md:block">{cartItem[item._id]}</p>
              <p className="hidden md:block">
                ₹{item.price * cartItem[item._id]}
              </p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          );
        }
        return null;
      })}

      {/* Cart Summary */}
      <div className="!mt-10 bg-gray-50 !p-6 rounded-lg shadow-md max-w-md !ml-auto !space-y-4">
        <h2 className="text-xl font-semibold">Cart Summary</h2>

        {/* Promo Code Section */}
        <div>
          <label htmlFor="promo" className="block !mb-1 text-sm font-medium">
            Promo Code
          </label>
          <div className="flex">
            <input
              id="promo"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 !p-2 border border-gray-300 rounded-l"
              placeholder="Enter code (e.g. SAVE10)"
            />
            <button
              onClick={handleApplyPromo}
              className="bg-blue-600 text-white !px-4 rounded-r hover:bg-blue-700 transition"
            >
              Apply
            </button>
          </div>
          {isApplied && (
            <p className="text-green-600 text-sm !mt-1">Promo code applied!</p>
          )}
          {error && <p className="text-red-500 text-sm !mt-1">{error}</p>}
        </div>

        {/* Totals */}
        <div className="text-sm !space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Promo Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
          )}
          <hr />
          <div className="flex justify-between font-bold text-base">
            <span>Total</span>
            <span>₹{finalTotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/order")}
          className="w-full bg-green-600 text-white !py-2 rounded hover:bg-green-700 transition"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
