import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem, NavList } from './styles';
import UserIcon from '../../assets/icons/users.svg';


const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLink activeClassName="active" to="/users">
              <img src={UserIcon} alt="User Icons" />
            <span>Users</span>
          </NavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
