import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Notfound from "./Components/Notdfound";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="*" element={<Notfound></Notfound>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
