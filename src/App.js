import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Demo from "./pages/Demo";
import Featured from "./pages/Featured";
import FeaturedTest from "./pages/FeaturedTest";
import Interocitor from "./pages/Interocitor";
// import Beta from "./pages/Beta";
import Download from "./pages/Downloads";
import DownloadTest from "./pages/DownloadsTest";
// import NDA from "./pages/Nda";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyTest from "./pages/PrivacyPolicyTest";
import TermService from "./pages/TermService";
import DynamicPage from "./pages/DynamicPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/featured" element={<Featured/>} />
          <Route path="/featured-test" element={<FeaturedTest/>} />
          <Route path="/featured/preview" element={<FeaturedTest/>} />
          <Route path="/interocitor" element={<Interocitor/>} />
          {/* <Route path="/beta" element={<Beta/>} /> */}
          <Route path="/downloads" element={<Download/>} />
          <Route path="/downloads-test" element={<DownloadTest/>} />
          <Route path="/downloads/preview" element={<Download/>} />
          <Route path="/downloads-test/preview" element={<DownloadTest/>} />
          {/* <Route path="/nda" element={<NDA/>} /> */}
          <Route path="/pages/:pageName" element={<DynamicPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/privacy-policy/preview" element={<PrivacyPolicy/>} />
          <Route path="/privacy-policy-test" element={<PrivacyPolicyTest/>} />
          <Route path="/privacy-policy-test/preview" element={<PrivacyPolicyTest/>} />
          <Route path="/terms-of-service" element={<TermService/>} />
          <Route path="/terms-of-service/preview" element={<TermService/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;