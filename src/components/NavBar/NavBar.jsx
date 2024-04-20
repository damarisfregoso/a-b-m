import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './NavBar.css';
// import * as userService from '../../utilities/users-service';

export default function NavBar() {
  // function handleLogOut() {
  //   userService.logOut();
  //   setUser(null);
  // }

  const { t } = useTranslation()

  const {ourServ, ourWork, contact} = t("navbar");

  return (
    <nav className='NavBar'>
      <Link to="/services">{ourServ}</Link>
      &nbsp; | &nbsp;
      <Link to="">{ourWork}</Link>
      &nbsp;&nbsp;
      &nbsp; | &nbsp;
      <Link to="">{contact}</Link>
      &nbsp;&nbsp;
      {/* <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}
    </nav>
  );
}