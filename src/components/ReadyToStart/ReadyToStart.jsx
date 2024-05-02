import './ReadyToStart.css';
import { useTranslation } from "react-i18next";

export default function ReadyToStart() {

  const { t } = useTranslation()
  const {contactUs} = t("buttons");

  return (
    <div className='ReadyToStart'>
      <h1>{t("readyToStart")}</h1>
      <span><button className="welcomeBtns">{contactUs}</button></span>
    </div>
  );
}