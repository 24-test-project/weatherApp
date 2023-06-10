import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./compoents/login/Login.jsx";
import Signup from "./compoents/signup/Signup.jsx";
import Weather from "./compoents/weather/Weather.jsx";
import { useState,useEffect } from "react";

export default function App() {
  const [userDB, setUserDB] = useState(
    JSON.parse(localStorage.getItem("userDB")) || [],
  );

  useEffect(() => {
    localStorage.setItem("userDB", JSON.stringify(userDB));
  }, [userDB]);

  return (
    <div id="root">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login userDB={userDB} />} />
          <Route path="Signup" element={<Signup userDB={userDB} setUserDB={setUserDB} />} />
          <Route path="Weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
