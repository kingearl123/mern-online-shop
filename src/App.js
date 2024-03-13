// import logo from './logo.svg';
// import Login from "./components/login";
// import Register from "./components/register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Homepage from "./view/Homepage";
import Login from "./view/login";
import Register from "./view/register";
import Input from "./view/pages/input";
import Show from "./view/pages/show";
import Edit from "./view/pages/edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/input" element={<Input />} />{" "}
        <Route path="/show" element={<Show />} />{" "}
        <Route path="/edit/:id" element={<Edit />} />{" "}
        {/* Tambahkan rute lainnya di sini jika diperlukan */}{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
