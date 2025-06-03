import { Routes, Route } from "react-router";
import NavBar from "./component/navBar.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Login from "./pages/Login.jsx";
import PrivacyPolicy from "./component/Footer/PrivacyPolicy.jsx";
import AboutUs from "./component/Footer/AboutUs.jsx";
import HelpSupport from "./component/Footer/HelpSupport.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import ExploreMenu from "./component/ExploreMenu/ExploreMenu.jsx";
import ViewOrders from "./pages/viewOrders.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="685174772664-6m4mqcvi4btk4i44okhsdrdhp1j6fpr0.apps.googleusercontent.com">
        <div className="app">
          <NavBar />
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/help" element={<HelpSupport />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/menu" element={<ExploreMenu />} />
            <Route path="/orders" element={<ViewOrders />} />
          </Routes>
        </div>

        <Footer />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
