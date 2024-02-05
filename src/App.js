import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home2";
import Demo from "./pages/Demo";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo/>} /> {/* Add this line for the /demo route */}
        </Routes>
      </Router>
    </>
  );
};

export default App;