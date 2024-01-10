import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Weather from "./components/Weather";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Header />} />
          <Route path="weather" element={<Weather />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
