import React from "react";
import { Children } from "react";
import Container from "react-bootstrap/Container";
import { default as BootstrapNav } from "react-bootstrap/Navbar";

const Navbar = ({ children }) => {
  return (
    <>
      <BootstrapNav className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <BootstrapNav.Brand href="#home">Insightify</BootstrapNav.Brand>
          <BootstrapNav.Toggle />
          <BootstrapNav.Collapse className="justify-content-end">
            <BootstrapNav.Text>
              <a href="/signin">signin</a>
            </BootstrapNav.Text>
          </BootstrapNav.Collapse>
        </Container>
      </BootstrapNav>
      {children}
    </>
  );
};

export default Navbar;
