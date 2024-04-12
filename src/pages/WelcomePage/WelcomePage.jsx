import { useTranslation } from "react-i18next";

export default function WelcomePage() {
  const { t } = useTranslation()

  return (
    <div className="WelcomePage">
      <div className="opening">
        <h1>{t("welcome")}</h1>
        <p>Where no job is too big or too small!</p>
        <h4>Since 2019</h4>
      </div>
      <p>Sick of all the problems that your home is giving you?</p>
      <p>Get your household troubles resolved in a breeze</p>
      <p> with quailty home repair and maintenance sercices from trusted experts!</p>

    </div>
  );
}