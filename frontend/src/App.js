import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import TransferMoney from "./pages/TransferMoney";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import CheckBalance from "./pages/CheckBalance";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mt-4">
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard/:id"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/transfer"
            element={
              <PrivateRoute>
                <TransferMoney />
              </PrivateRoute>
            }
          />

          <Route
            path="/transactions"
            element={
              <PrivateRoute>
                <Transactions />
              </PrivateRoute>
            }
          />

          <Route
            path="/balance/:id"
            element={
            <PrivateRoute>
            <CheckBalance />
            </PrivateRoute>
            }
            />

        </Routes>
      </div>

    </Router>
  );
}

export default App;