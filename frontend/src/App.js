import { useState } from "react";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Transacciones from "./views/Transacciones";
import Dashboard from "./views/Dashboard";

function App() {
   const [activo, setActivo] = useState("transactions");

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">NodoIntel</span>
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className={`nav-link ${activo === "transactions" ? "active fw-bold border-bottom border-primary" : ""}`} to="/transactions" onClick={() => setActivo("transactions")}> Transacciones</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activo === "dashboard" ? "active fw-bold border-bottom border-primary" : ""}`} to="/dashboard" onClick={() => setActivo("dashboard")}> Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Transacciones />} />
        <Route path="/transactions" element={<Transacciones />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
