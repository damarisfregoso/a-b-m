import { useTranslation } from "react-i18next";
import './WelcomePage.css'
import ReadyToStart from "../../components/ReadyToStart/ReadyToStart";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const { t } = useTranslation()

  const {slogan, year, line1, line2, line3} = t("description");
  const {ourServ} = t("navbar");
  const {explore, pastWork} = t("buttons");

  return (
    <div className="WelcomePage">
      <div className="opening">
        <h1>{t("welcome")}</h1>
        <span>{slogan}</span>
        <h4>{year}</h4>
      </div>
      <div className="quote">
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
      </div>
      <h1 className="chooseUs">{t("chooseUs")}</h1>
      <div className="chooseUs-Box">        
        <>
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="workers putting cement" />
        </>
        <>
          <p>{t("chooseUsQuote")}</p>
        </>
      </div>
      <div className="ourServices">
        <h1 className="chooseUs">{ourServ}</h1>
        <p>{t("servicesQuote")}</p>
        <div className="ourServicesBtns">
        <Link to="/services"><button className="welcomeBtns">{explore}</button></Link>
        <Link to="/our-work"><button className="welcomeBtns">{pastWork}</button></Link>
        </div>
      </div>
      <ReadyToStart />
    </div>
  );
}