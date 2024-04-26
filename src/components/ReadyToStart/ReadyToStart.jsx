import './ReadyToStart.css';
import { useTranslation } from "react-i18next";

export default function ReadyToStart() {

  const { t } = useTranslation()
  const {contactUs} = t("buttons");

  return (
    <div className='ReadyToStart'>
      <h1 className='chooseUs'>{t("readyToStart")}</h1>
      <button>{contactUs}</button>
    </div>
  );
}