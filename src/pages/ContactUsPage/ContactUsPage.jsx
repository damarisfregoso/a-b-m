import { useTranslation } from "react-i18next";

export default function ContactUsPage() {

  const { t } = useTranslation()

  const {contactTitle, cellphone, email} = t("contactPage");

  return (
  <div className="ContactUsPage">
    <h1>{contactTitle}</h1>
    <div className="contact-container">
      <div>
        <h1>{cellphone}</h1>
        <p>(111)222-3333</p>
      </div>
      <div>
        <h1>{email}</h1>
        <a href={`mailto:${email}`}>affordablebuildingm6@gmail.com</a>
      </div>
    </div>
  </div>
  );
}