import { useTranslation } from "react-i18next";

export default function WelcomePage() {
  const { t } = useTranslation()

  const {slogan, year, line1, line2, line3} = t("description");

  return (
    <div className="WelcomePage">
      <div className="opening">
        <h1>{t("welcome")}</h1>
        <p>{slogan}</p>
        <h4>{year}</h4>
      </div>
      <p>{line1}</p>
      <p>{line2}</p>
      <p>{line3}</p>

    </div>
  );
}