import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";
import Home from "./components/homepage/Home";
import Navigation from "./components/navbar/navigation";
import Contact from "./components/pages/Contact-Us/Contact";
import Profile from "./components/pages/Google-Page/Profile";
import SignIn from "./components/pages/Google-Page/SignIn";
import SignUp from "./components/pages/Google-Page/Sign-Up";
import Offers from "./components/pages/Google-Page/Offers";
import ForgotPassword from "./components/pages/Google-Page/ForgotPassword";
import CustomerPage from "./components/pages/Google-Page/CustomerPage";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Routes>
          <Route path="/customerpage" element={<CustomerPage />} />
          <Route path="/profile" element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer
        toastStyle={{ backgroundColor: "#3f413f", fontSize: "bold" }}
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
