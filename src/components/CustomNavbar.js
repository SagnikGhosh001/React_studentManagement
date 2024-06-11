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
import { Link, NavLink as ReactLink, useNavigate } from 'react-router-dom';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import userContext from "../context/userContext";
import Stack from '@mui/material/Stack';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
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
                <NavLink tag={ReactLink} to="/user/features">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/user/courses">Courses</NavLink>
              </NavItem>
              {
                object.user.data.role === "admin" ? (<NavItem>
                  <NavLink tag={ReactLink} to="/user/regcandidate">Register Candidates</NavLink>
                </NavItem>) : ''
              }

            </>
          )}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={ReactLink} to="/contactus">Contact us</DropdownItem>
              {login &&(<DropdownItem tag={ReactLink} to="/user/feedback">FeedBack</DropdownItem>)}
              
              <DropdownItem divider />
              <DropdownItem><Link to="https://www.facebook.com/sagnik.ghosh.31337" style={{ cursor: 'pointer', textDecoration: "none", color: "black" }}>Facebook</Link></DropdownItem>
              <DropdownItem><Link to="https://www.instagram.com/sagnik_ghosh_01?igsh=MWk4NGdnOGl3YmxpeQ==" style={{ cursor: 'pointer', textDecoration: "none", color: "black" }}>Instagram</Link></DropdownItem>
              <DropdownItem><Link to="https://www.linkedin.com/in/sagnik-ghosh-445b86303/" style={{ cursor: 'pointer', textDecoration: "none", color: "black" }}>Linkedin</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav navbar>

          {login ? (
            <>
              {
                object.user.data.role === "admin" ? (
                  <>
                    <NavItem>
                      <NavLink tag={ReactLink} to={`/user/admindashboard/${user.id}`}>{object.user.data.userName}</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={logout} style={{ cursor: 'pointer' }}>Logout</NavLink>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <NavLink tag={ReactLink} to={`/user/dashboard/${user.id}`}>{object.user.data.userName}</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={logout} style={{ cursor: 'pointer' }}>Logout</NavLink>
                    </NavItem>
                  </>
                )

              }

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
