// import React, { useState } from "react";

// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
// // import axios from "axios";
// import axiosInstance from "../../axiosInstance";
// import { baseUrl } from "../../config";

// import { useNavigate, NavLink } from "react-router";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const onFinish = (values) => {
//     try {
//       axiosInstance.post(`${baseUrl}/auth/login`, values).then((response) => {
//         if (response.data.success) {
//           toast.success(response.data.message);
//           localStorage.setItem("accessToken", response.data.jwtToken);
//           setIsLoading(true);
//           setTimeout(() => {
//             setIsLoading(false);
//             navigate("/"); // Redirect to Home after success
//           }, 2000);
//         } else {
//           toast.error(response.data.message);
//         }
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.error);
//     }
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <Form
//         name="login"
//         onFinish={onFinish}
//         className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
//       >
//         <Form.Item
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Username!",
//             },
//           ]}
//         >
//           <Input
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="Username"
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Password!",
//             },
//           ]}
//         >
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button
//             block
//             type="primary"
//             htmlType="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 transition-all duration-200"
//           >
//             Log in
//           </Button>
//           {/* or <NavLink to="/register">Register now!</NavLink> */}
//         </Form.Item>
//         <div className="text-center  text-sm text-gray-600 !mt-5 !p-2">
//           <p>
//             Create a new account? .
//             <NavLink
//               to="/register"
//               className=" text-blue-500  hover:underline "
//             >
//               Click Here
//             </NavLink>
//           </p>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axiosInstance from "../../axiosInstance";
import { baseUrl } from "../../config";
import { useNavigate, NavLink } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post(
        `${baseUrl}/auth/login`,
        values
      );
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("accessToken", response.data.jwtToken);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/");
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    }
  };
  const responseGoogle = async (authResult) => {
    try {
      if (authResult.code) {
        const res = await axiosInstance.post(
          `${baseUrl}/auth/google?code=${authResult.code}`
        );
        const { token, user } = res.data;

        localStorage.setItem("accessToken", token);
        localStorage.setItem("username", res.data.fullname);
        localStorage.setItem("user-info", JSON.stringify(user));
        navigate("/");
      } else {
        throw new Error("Google authentication failed");
      }
    } catch (e) {
      console.log("Error while Google Login...", e);
      toast.error("Google login failed");
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 !px-4">
      <div className="bg-white w-full max-w-md !p-8 rounded-2xl shadow-2xl border-t-4 border-yellow-400">
        <h2 className="text-3xl font-bold text-center text-gray-800 !mb-6">
          Login
        </h2>

        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label={<label className="text-gray-700 font-medium">Email</label>}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="you@example.com"
              className="rounded-md py-2"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <label className="text-gray-700 font-medium">Password</label>
            }
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="••••••••"
              className="rounded-md !py-2"
            />
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg !py-2 text-lg transition-all duration-200"
            >
              Log in
            </Button>
            <div className="text-center my-4">
              <span className="text-gray-500 text-sm">or</span>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={googleLogin}
                className="flex items-center gap-3 !px-6 !py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 533.5 544.3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M533.5 278.4c0-17.4-1.6-34.2-4.6-50.5H272.1v95.5h146.9c-6.3 34.2-25.2 63.3-53.5 82.6v68h86.4c50.6-46.6 81.6-115.3 81.6-195.6z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c72.6 0 133.6-24 178.1-65.2l-86.4-68c-23.9 16.1-54.4 25.5-91.7 25.5-70.6 0-130.4-47.7-151.8-111.5H32.3v69.9c44.8 88 137.6 149.3 239.8 149.3z"
                    fill="#34a853"
                  />
                  <path
                    d="M120.3 324.9c-10.1-30.4-10.1-62.7 0-93.1V161.9H32.3c-36.7 72.7-36.7 157.8 0 230.5l88-67.5z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c39.6-.6 77.6 13.7 106.9 39.7l80.2-80.2C385.6 21.4 329.6 0 272.1 0 169.9 0 77.1 61.3 32.3 149.3l88 69.9c21.4-63.8 81.2-111.5 151.8-111.5z"
                    fill="#ea4335"
                  />
                </svg>
                <span className="font-medium">Sign in with Google</span>
              </button>
            </div>
          </Form.Item>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <NavLink
              to="/register"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Register
            </NavLink>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
