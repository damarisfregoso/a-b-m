import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {

  const { t } = useTranslation()
  const {ourServ, ourWork, contact} = t("navbar");
  const {developedBy, role, portfolio, github, linkedin, viewPortfolio, viewLinkedin, viewGithub} = t("footer")

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
          <Link to="/services">{ourServ}</Link>
          &nbsp; | &nbsp;
          <Link to="">{ourWork}</Link>
          &nbsp; | &nbsp;
          <Link to="">{contact}</Link>
          &nbsp;&nbsp;
      </div>  

      <div className="footer-two">
        <a href="https://www.facebook.com/Affordable.Building.Maintenace?mibextid=ZbWKwL">
        <img src="https://www.clipartmax.com/png/full/165-1651536_facebook-logo-facebook-green-logo-png.png" alt="ABM facebook link" />
        </a>
      </div>

      <div className="footer-three">
        <p>{developedBy}: {developerInfo.name}</p>
        <p>{role}: {developerInfo.role}</p>
        <p>{portfolio}: <a href={developerInfo.portfolio}>{viewPortfolio}</a></p>
        <p>{github}: <a href={developerInfo.github}>{viewGithub}</a></p>
        <p>{linkedin}: <a href={developerInfo.linkedin}>{viewLinkedin}</a></p>
      </div>

    </footer>
  );
}