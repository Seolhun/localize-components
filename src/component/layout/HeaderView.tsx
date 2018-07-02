import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import routes from '@/routes/schema';

import './HeaderView.scss';

export interface HeaderViewProps extends React.Props<HeaderView> {
}

export interface HeaderViewState {
  is_open: boolean;
}

class HeaderView extends React.Component<HeaderViewProps, HeaderViewState> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      is_open: false,
    };
  }

  toggle() {
    this.setState({
      is_open: !this.state.is_open,
    });
  }

  renderNavs() {
    return routes.map((route, idx) => {
      return (
        <li className='nav-item'>
          <Link
            className='nav-link'
            to={route.path}
          >
            {route.label}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar color='faded' light expand='md'>
          <div className='container'>
            <Link className='navbar-brand nav-link' to='/'>Simple Components</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.is_open} navbar>
              <Nav navbar>
                <NavItem>
                  <ul className='navbar-nav'>
                    {
                      this.renderNavs()
                    }
                  </ul>
                </NavItem>
              </Nav>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <NavLink href='https://github.com/seolhun' target='_blank'>Github</NavLink>
                    </li>
                  </ul>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HeaderView;
