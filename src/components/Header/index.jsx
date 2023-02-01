import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Header.scss";

export default function Header() {
  const handleClick = () => {
    const navbar = document.getElementById("navbar")

    navbar.classList.toggle("open")
  }

  return (
    <>
      <header className="header">
          <Link to="/">
            <img src={logo} alt="space" title="Travel to Space" />
          </Link>
          <div className="bar"></div>

        <nav id="navbar">
          <ul>
            <li>
              <Link to="./" activeClassName="" >
                <span>00</span> Home
              </Link>
            </li>
            <li>
              <Link to="/destination" activeClassName="">
                <span>01</span> Destination
              </Link>
            </li>
            <li>
              <Link to="/crew" activeClassName="">
                <span>02</span> Crew
              </Link>
            </li>
            <li>
              <Link
                to="/technology" activeClassName="">
                <span>03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>

        <div className="menu">
          <button id="menu" onClick={handleClick}>&#9776;</button>
        </div>
      </header>
    </>
  )
}
