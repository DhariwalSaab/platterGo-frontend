import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axiosInstance from "../../axiosInstance";
import { baseUrl } from "../../config";

const ViewOrders = () => {
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl}/order/viweorderList`
      );
      setDataSource(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Flatten order data to cart items for display
  const transformData = (orders) => {
    return orders.flatMap((order) =>
      order.cartItems.map((item) => ({
        _id: order._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        totalAmount: order.totalAmount,
        status: order.status || "Preparing", // Use status from DB or fallback
      }))
    );
  };

  const transformedData = transformData(dataSource);

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total (₹)",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span className="capitalize font-medium text-blue-600">{text}</span>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      <Table
        columns={columns}
        dataSource={transformedData}
        rowKey={(record) => `${record._id}-${record.name}`}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ViewOrders;
