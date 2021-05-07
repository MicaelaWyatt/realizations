import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../images/LsLogo.PNG"
import "./NavBar.css"

export const NavBar = (props) => {
  return (<>
  <img src={logo} alt="real-logo" className="logo"/>
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" id="a" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="b" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="c" to="/goals">Goals</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="d" to="/forgiveness">Forgiveness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="e" to="/community">Community</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}
