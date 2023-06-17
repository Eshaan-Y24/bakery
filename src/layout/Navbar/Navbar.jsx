// lib
import React, { useState } from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";

// styles
import "./Navbar.scss"

// images 
import cart from "../../images/cart.svg"
import user from "../../images/user.svg"
import menu from "../../images/menu.svg"

const Navbar = () => {
  const [setshowMenuItems, setSetshowMenuItems] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <Link style={{ color: 'inherit', textDecoration: "none" }} to={'/'}>
          <div className="logo">Scrumptious</div>
        </Link>
        <Menu />
        <Options setSetshowMenuItems={setSetshowMenuItems} />


      </div>
      <div className="minimenu">
        {setshowMenuItems && <MiniMenu />}
      </div>
    </nav>
  );
};

const MiniMenu = () => {
  return <ul className="primaryList">
    <MenuItem link={"/"} text="Home" />
    <MenuItem link={"/"} text="Products" />
    <MenuItem link={"/blog"} text="Blog" />
  </ul>
}

const Menu = () => {
  return <React.Fragment>
    <ul className="primaryList">
      <MenuItem link={"/"} text="Home" />
      <MenuItem link={"/products"} text="Products" />
      <MenuItem link={"/blog"} text="Blog" />
    </ul>
  </React.Fragment>
}

const MenuItem = ({ link, text }) => {
  return <li>
    <Link style={{ color: 'inherit', textDecoration: "none" }} to={link}>{text}</Link>
  </li>
}

const Options = () => {
  const [count, setCount] = useState(0)
  store.subscribe(() => setCount(store.getState().cartItems.length))
  return <div className="secondaryList">
    <img src={menu} className="hamburger" alt="" width={35} />
    <div className="carticon">
      <img src={cart} alt="" width={30} /><span>{count ? count : ""}</span>
    </div>
    <img src={user} alt="" width={30} />
  </div>
}

export default Navbar;
