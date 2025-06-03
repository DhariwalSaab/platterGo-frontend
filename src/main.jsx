import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
import StoreContextProvider from "./context/storeContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <StoreContextProvider>
        <GoogleOAuthProvider clientId="685174772664-6m4mqcvi4btk4i44okhsdrdhp1j6fpr0.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </StoreContextProvider>
    </BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </>
);
