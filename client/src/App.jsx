import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/Home.page";
import SignInPage from "./Pages/SignIn.page";
import SignUpPage from "./Pages/SignUp.page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
