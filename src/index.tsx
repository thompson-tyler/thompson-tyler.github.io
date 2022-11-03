import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import { UglaProject } from "./routes/projects/ugla";
import { AnimalAidProject } from "./routes/projects/animal-aid";
import { TupitProject } from "./routes/projects/tupit";
import { WicProject } from "./routes/projects/wic";
import { SwarmProject } from "./routes/projects/swarms";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path="ugla" element={UglaProject} />
            <Route path="animal-aid" element={AnimalAidProject} />
            <Route path="tupit" element={TupitProject} />
            <Route path="wic" element={WicProject} />
            <Route path="swarms" element={SwarmProject} />
            <Route path="*" element={<Projects />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
