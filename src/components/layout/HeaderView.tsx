import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown,
} from 'reactstrap';

class HeaderView extends React.Component<{}, { isOpen: boolean }> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarBrand href='/'>JTN-React Project</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/grammar'>Grammar</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/funtional'>Funtional</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/pattern'>Design Pattern</Link>
                  </li>
                </ul>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='https://github.com/seolhun' target='_blank'>Github</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderView;
