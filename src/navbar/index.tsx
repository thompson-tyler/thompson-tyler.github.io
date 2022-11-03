import Styles from "./index.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={Styles.container}>
      <Link className={Styles.logo} to="/">
        <div className={Styles.logoText}>
          T<div className={Styles.shrink}>yler&nbsp;</div>T
          <div className={Styles.shrink}>hompson</div>
        </div>
      </Link>
      <div className={Styles.navLinks}>
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="/Thompson_Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
