import './NavBar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import DarkMode from '../DarkMode/DarkMode';
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
      <section>
        <DarkMode />
        <Link to="/"><img src="/ABMLogo.jpg" alt="ABM logo" className='ABMLogo'/></Link>
      </section>
      <span>
        <Link to="/services">{ourServ}</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to="/our-work">{ourWork}</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to="/contact">{contact}</Link>
        &nbsp;&nbsp;
        {/* <span>Welcome, {user.name}</span>
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}
      </span>
    </nav>
  );
}