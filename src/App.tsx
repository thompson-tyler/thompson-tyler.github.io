import "./App.scss";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
