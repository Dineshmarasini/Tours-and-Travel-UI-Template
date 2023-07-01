import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { Menuitems } from "./Menuitems.js";

class Navbar extends Component {
  state = { clicked: false };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">NEPTours</h1>
        <div className="menu-icons" onClick={this.handleClicked}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars "}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu activate" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icons}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
