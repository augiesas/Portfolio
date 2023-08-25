import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/Pages/main';
import AboutMe from "./components/Pages/about-me";
import Expertise from "./components/Pages/expertise";
import MyProjects from "./components/Pages/my-projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/' element={<Main />} />
        <Route path='/expertise' element={<Expertise />} />
        <Route path='/myProjects' element={<MyProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <App />
);

reportWebVitals();
