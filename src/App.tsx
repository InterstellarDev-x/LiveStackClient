import { Navigate, Route, Routes } from "react-router-dom";

import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  );
}
