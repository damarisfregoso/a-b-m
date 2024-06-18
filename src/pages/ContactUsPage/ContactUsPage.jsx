import { useTranslation } from "react-i18next";
import './ContactUsPage.css'

export default function ContactUsPage() {

  const { t } = useTranslation()

  const {contactTitle, cellphone, email} = t("contactPage");

  return (
  <div className="ContactUsPage">
    <h1 className="ContactTitle">{contactTitle}</h1>
    <div className="contact-container">
      <div>
        <h1>{cellphone}</h1>
        <a className="contact" href={`tel:${cellphone}`}>(209)688-5588</a>
      </div>
      <div>
        <h1>{email}</h1>
        <a className="contact" href={`mailto:${email}`}>Affordablebuildingm6@gmail.com</a>
      </div>
    </div>
  </div>
  );
}