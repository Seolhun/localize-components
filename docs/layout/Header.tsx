import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

import routes from '../routes/schema';
import './Header.scss';

export interface HeaderProps extends React.Props<Header> {}

export interface HeaderState {
  is_open: boolean;
  clickedMenu: string;
  dropdownIsOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      is_open: false,
      clickedMenu: 'home',
      dropdownIsOpen: false,
    };
  }

  handleDropdownToggle = (clickedMenu) => {
    this.setState({
      clickedMenu,
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  handleToggle = () => {
    this.setState({
      is_open: !this.state.is_open,
    });
  };

  renderNavs() {
    const { dropdownIsOpen, clickedMenu } = this.state;
    return Object.keys(routes).map((key) => {
      if (!Array.isArray(routes[key])) {
        return (
          <Nav key={key} navbar>
            <Link className="nav-link" to={routes[key].path}>
              {routes[key].label}
            </Link>
          </Nav>
        );
      }
      return (
        <Nav key={key} navbar>
          <Dropdown
            key={key}
            nav
            isOpen={clickedMenu === key && dropdownIsOpen}
            toggle={() => this.handleDropdownToggle(key)}
          >
            <DropdownToggle nav caret>
              {key}
            </DropdownToggle>
            <DropdownMenu key={key}>
              {routes[key].map((route) => {
                return (
                  <DropdownItem key={route.label}>
                    <Link className="nav-link" to={route.path}>
                      {route.label}
                    </Link>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </Nav>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <div className="container">
            <Link className="navbar-brand nav-link" to="/">
              Components
            </Link>
            <NavbarToggler onClick={this.handleToggle} />
            <Collapse isOpen={this.state.is_open} navbar>
              {this.renderNavs()}
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/seolhun" target="_blank">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
