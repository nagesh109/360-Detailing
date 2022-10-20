import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import {useEffect, useState} from 'react';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;