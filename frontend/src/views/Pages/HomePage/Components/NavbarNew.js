import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavbarBaru = (props) => {
  return (
    <div>
      <div>
        <Navbar color="WHITE" light expand="md">
          <NavbarBrand href="/">LUCKY BORROW</NavbarBrand>
          <NavbarBrand href="/#/login">Login</NavbarBrand>
          {/* <NavbarBrand href="/#/register">Register</NavbarBrand> */}
        </Navbar>
      </div>
      <div style={{ width: "100%", backgroundColor: "red" }}>
        <img
          style={{ width: "100%" }}
          src="https://user-images.githubusercontent.com/38047246/112252159-22621f80-8c8f-11eb-99f5-a93fe9fffe93.png"
        />
      </div>
    </div>
  );
};

export default NavbarBaru;
