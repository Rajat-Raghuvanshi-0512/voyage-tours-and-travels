import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import HomePage from "./Pages/Home.page";
import SignInPage from "./Pages/SignIn.page";
import SignUpPage from "./Pages/SignUp.page";
import ForgotPassPage from "./Pages/ForgotPass.page";
import ResetPassPage from "./Pages/ResetPass.page";
import PassSavedPage from "./Pages/PassSaved.page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/password/forgot" element={<ForgotPassPage />} /> 
        <Route path="/password/reset" element={<ResetPassPage />} /> 
        <Route path="/password/saved" element={<PassSavedPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
