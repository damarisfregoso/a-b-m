import { useTranslation } from "react-i18next";

export default function OurServiesPage() {
  const { t } = useTranslation()

  const {serviceTitle} = t("sloganTitles");

  return (
    <div className="OurServicesPage">
      <h1>{serviceTitle}</h1>
    </div>
  );
}