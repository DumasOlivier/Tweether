import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className="py-3" light expand="md">
        <Container className="w-100 d-flex justify-content-between">
          <div>
            <NavbarBrand href="/">Tweether</NavbarBrand>
          </div>
          <div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  {/*
                    <NavLink href="/components/">Components</NavLink>
                  */}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
