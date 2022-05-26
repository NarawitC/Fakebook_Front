import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { FacebookLogo, Friend, Home } from '../../../icons';
import Logo from './Logo';
import Menu from './Menu';
import ProfileIcon from './ProfileIcon';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm py-0 fixed-top">
        <div className="container-fluid">
          <Logo></Logo>
          <Menu></Menu>

          <div className="d-flex justify-content-end align-items-center flex-grow-1 me-1">
            <ProfileIcon></ProfileIcon>
            <Dropdown></Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
