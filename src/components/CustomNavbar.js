import React, { useContext, useEffect, useState } from 'react';
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
  DropdownItem,
} from 'reactstrap';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import userContext from "../context/userContext";


function CustomNavbar() {
  const object = useContext(userContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);


  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <Navbar color="dark" dark expand="md" className="px-5">
      <NavbarBrand tag={ReactLink} to="/">Student Management</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/about">About</NavLink>
          </NavItem>
          {login && (
            <>
              <NavItem>
                <NavLink tag={ReactLink} to="/user/courses">Courses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/user/regcandidate">Register Candidates</NavLink>
              </NavItem>
            </>
          )}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Contact us</DropdownItem>
              <DropdownItem>Help</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Facebook</DropdownItem>
              <DropdownItem>Instagram</DropdownItem>
              <DropdownItem>LinkedIn</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav navbar>
          {login ? (
            <>
              <NavItem>
                <NavLink tag={ReactLink} to={`/user/dashboard/${user.id}`}>{object.user.data.userName}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={logout} style={{ cursor: 'pointer' }}>Logout</NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink tag={ReactLink} to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/signup">SignUp</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
