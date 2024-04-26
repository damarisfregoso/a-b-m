import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {

  const { t } = useTranslation()
  const {ourServ, ourWork, contact} = t("navbar");

  const developerInfo = {
    name: "Damaris Fregoso",
    role: "Full Stack Software Engineer",
    github: "https://github.com/damarisfregoso",
    portfolio: "https://damarisfregoso.godaddysites.com/",
    linkedin: "https://www.linkedin.com/in/damaris-fregoso/"
  }

  return (
    <footer className='Footer'>
      <div className="footer-one">
        <div>
          <Link to="/services">{ourServ}</Link>
          &nbsp; | &nbsp;
          <Link to="">{ourWork}</Link>
          &nbsp;&nbsp;
          &nbsp; | &nbsp;
          <Link to="">{contact}</Link>
          &nbsp;&nbsp;
        </div>
        <span>
        <a href="https://www.facebook.com/Affordable.Building.Maintenace?mibextid=ZbWKwL">
        <img src="https://www.clipartmax.com/png/full/165-1651536_facebook-logo-facebook-green-logo-png.png" alt="ABM facebook link" />
      </a>
        </span>
      </div>
      <div className="footer-two">
        <p>Developed by {developerInfo.name}</p>
        <p>Role: {developerInfo.role}</p>
        <p>Portfolio: <a href={developerInfo.portfolio}>View Portfolio</a></p>
        <p>GitHub: <a href={developerInfo.github}>GitHub Profile</a></p>
        <p>LinkedIn: <a href={developerInfo.linkedin}>LinkedIn Profile</a></p>
      </div>
    </footer>
  );
}