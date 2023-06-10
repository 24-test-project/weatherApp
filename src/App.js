import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./compoents/login/Login.jsx";
import Signup from "./compoents/signup/Signup.jsx";
import Weather from "./compoents/weather/Weather.jsx";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
