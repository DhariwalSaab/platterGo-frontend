import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router";
import axiosInstance from "../../axiosInstance";
import { baseUrl } from "../../config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { cartItem, food_list } = useContext(StoreContext);
  const [discount, setDiscount] = useState(0);
  const deliveryFee = 2;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  // 🔐 Check login
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.warning("Please login to place an order");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [navigate]);

  const subtotal = food_list.reduce((acc, item) => {
    return acc + item.price * (cartItem[item._id] || 0);
  }, 0);

  const totalBeforeDiscount = subtotal + deliveryFee;
  const finalTotal = totalBeforeDiscount - discount;

  const cartItems = food_list
    .filter((item) => cartItem[item._id] > 0)
    .map((item) => ({
      id: item._id,
      name: item.name,
      quantity: cartItem[item._id],
      price: item.price,
    }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("You must be logged in to place an order.");
      navigate("/login");
      return;
    }

    try {
      const orderData = {
        ...formData,
        cartItems,
        subtotal,
        deliveryFee,
        discount,
        totalAmount: finalTotal,
      };

      const response = await axiosInstance.post(
        `${baseUrl}/order/orders`,
        orderData
      );

      if (response && response.status === 200) {
        toast.success("Order placed successfully!");
        navigate("/orders");
      } else {
        toast.error("Failed to place order");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {/* Delivery Info */}
      <div className="space-y-6">
        <p className="text-xl font-semibold">Delivery Information</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="First Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Last Name"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          name="street"
          onChange={handleChange}
          value={formData.street}
          placeholder="Street Address"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="city"
            onChange={handleChange}
            value={formData.city}
            placeholder="City"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            name="state"
            onChange={handleChange}
            value={formData.state}
            placeholder="State"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="zipCode"
            onChange={handleChange}
            value={formData.zipCode}
            placeholder="Zip Code"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            name="country"
            onChange={handleChange}
            value={formData.country}
            placeholder="Country"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <input
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Phone"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="text-sm space-y-2">
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
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          PLACE ORDER
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
