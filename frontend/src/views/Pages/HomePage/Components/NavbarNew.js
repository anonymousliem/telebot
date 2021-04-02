import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavbarBaru = (props) => {
  return (
    <div>
      <div>
        <Navbar color="WHITE" light expand="md">
          <NavbarBrand href="/">Covid-19 BOT</NavbarBrand>
          <NavbarBrand href="/#/login"><h5 style={{color:'red'}}>Login</h5></NavbarBrand>
          <NavbarBrand href="/#/register"><h5 style={{color:'red'}}>Register</h5></NavbarBrand>
          {/* <NavbarBrand href="/#/register">Register</NavbarBrand> */}
        </Navbar>
      </div>
      <div style={{ width: "50%", backgroundColor: "red", margin:'0 25%'}}>
        <img
          style={{ width: "100%"}}
          src="https://user-images.githubusercontent.com/38047246/113407942-93fd4480-93d8-11eb-81e6-cf4fe9d7a05e.png"
        />
      </div>
    </div>
  );
};

export default NavbarBaru;
