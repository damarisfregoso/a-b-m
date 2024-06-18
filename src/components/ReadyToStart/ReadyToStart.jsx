import { Link } from 'react-router-dom';
import './ReadyToStart.css';
import { useTranslation } from "react-i18next";

export default function ReadyToStart() {

  const { t } = useTranslation()
  const {contactUs} = t("buttons");

  return (
    <div className='ReadyToStart'>
      <h1>{t("readyToStart")}</h1>
      <Link to="/contact"><button className="welcomeBtns">{contactUs}</button></Link>
    </div>
  );
}