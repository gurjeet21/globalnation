import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Demo from "./pages/Demo";
import Featured from "./pages/Featured";
import Interocitor from "./pages/Interocitor";
import Beta from "./pages/Beta";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/featured" element={<Featured/>} />
          <Route path="/interocitor" element={<Interocitor/>} />
          <Route path="/beta" element={<Beta/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;