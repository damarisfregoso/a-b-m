import { useTranslation } from "react-i18next";
import ServiceCards from "../../components/ServiceCards/ServiceCards"
import './OurServicesPage.css'


export default function OurServiesPage() {
  const { t } = useTranslation()

  const {serviceTitle} = t("sloganTitles");

  return (
    <div className="OurServicesPage">
      <h1 className="ServiceTitle">{serviceTitle}</h1>
      <ServiceCards />
    </div>
  );
}