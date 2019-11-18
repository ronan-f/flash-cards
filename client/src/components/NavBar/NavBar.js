import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Cookies from 'universal-cookie';
import { ROUTE_DASHBOARD, ROUTE_FORGOT_PASSWORD } from '../../constants';
import { withRouter } from 'react-router-dom';

const cookies = new Cookies();

const CustomNavBar = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    cookies.remove('token', { path: '/' });
    history.push(ROUTE_DASHBOARD);
  }

  return (
    <div className="lighter-blue border border-secondary navbar-width">
      <Navbar light expand="md">
        <NavbarBrand href="/"><span className="font-weight-bold">FlashCards</span>.com</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={ ROUTE_FORGOT_PASSWORD }>Flash Cards</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="text-center">
                  <span onClick={ handleLogout }>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(CustomNavBar);