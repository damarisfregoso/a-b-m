import { useTranslation } from "react-i18next";

export default function OurServiesPage() {
  const { t } = useTranslation()

  const {workTitle} = t("sloganTitles");

  return (
    <div className="OurServicesPage">
      <h1>{workTitle}</h1>
    </div>
  );
}