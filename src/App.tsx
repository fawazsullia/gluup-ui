import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './views/Auth/Signup';
import Login from "./views/Auth/Login"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
