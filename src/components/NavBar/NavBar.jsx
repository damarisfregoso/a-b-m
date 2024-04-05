import { Link } from 'react-router-dom';
// import * as userService from '../../utilities/users-service';

export default function NavBar() {
  // function handleLogOut() {
  //   userService.logOut();
  //   setUser(null);
  // }

  return (
    <nav>
      <Link to="/services">Our Services</Link>
      &nbsp; | &nbsp;
      <Link to="">Our Work</Link>
      &nbsp;&nbsp;
      &nbsp; | &nbsp;
      <Link to="">Contact Us!</Link>
      &nbsp;&nbsp;
      {/* <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}
    </nav>
  );
}