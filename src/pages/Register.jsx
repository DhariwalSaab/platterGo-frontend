import React from "react";
import { Button, Form, Input, Radio } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
const register = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    try {
      axios
        .post("http://localhost:3000/api/auth/register", values)
        .then((response) => {
          if (response.data.success === true) {
            toast.success(response.data.message);
            localStorage.setItem(
              "user",
              JSON.stringify({ ...response.data.user, role: "user" })
            );
            setTimeout(() => {
              navigate("/login"); // Redirect to login after success
            }, 2000);
          } else {
            toast.error(response.data.message);
          }
        });
    } catch (err) {
      toast.error(err.response?.data?.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 !px-4">
      <div className="bg-white w-full max-w-md !p-8 rounded-2xl shadow-2xl border-t-4 border-yellow-400">
        <h2 className="text-3xl font-bold text-center text-gray-800 !mb-6">
          Create an Account
        </h2>

        <Form name="register" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="fullname"
            label={
              <label className="text-gray-700 font-medium">Full Name</label>
            }
            rules={[{ required: true, message: "Please input your Fullname!" }]}
          >
            <Input placeholder="John Doe" className="rounded-md !py-2" />
          </Form.Item>

          <Form.Item
            name="email"
            label={<label className="text-gray-700 font-medium">Email</label>}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="you@example.com" className="rounded-md !py-2" />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <label className="text-gray-700 font-medium">Password</label>
            }
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="••••••••"
              className="rounded-md !py-2"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={
              <label className="text-gray-700 font-medium">Phone Number</label>
            }
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              maxLength={10}
              minLength={10}
              placeholder="(123) 456-7890"
              className="rounded-md py-2"
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label={<label className="text-gray-700 font-medium">Gender</label>}
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Radio.Group className="flex gap-4">
              <Radio value="Male" className="text-indigo-600">
                Male
              </Radio>
              <Radio value="Female" className="text-indigo-600">
                Female
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="address"
            label={<label className="text-gray-700 font-medium">Address</label>}
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input
              placeholder="123 Main St, City"
              className="rounded-md py-2"
            />
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg !py-2 text-lg transition-all duration-200"
            >
              Register
            </Button>
          </Form.Item>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </NavLink>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default register;
