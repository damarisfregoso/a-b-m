import { useTranslation } from "react-i18next";

export default function OurServiesPage() {
  const { t } = useTranslation()

  const {serviceTitle} = t("sloganTitles");
  const {AppAndCab} = t("serviceTitles");
  const {AppAndCabInfo} = t("serviceSolgan");

  return (
    <div className="OurServicesPage">
      <h1>{serviceTitle}</h1>
      <div className="card">
    <img className="card-top" src="https://www.pennington.com/all-products/fertilizer/resources/-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/8-Steps-to-Growing-a-Healthy-Indoor-Garden-Anytime/tropical-urban-garden.jpg" alt="plants"/>
    <div className="card-body">
      <h1>{AppAndCab}</h1>
      <p className="card-text">{AppAndCabInfo}</p>
    </div>
  </div>
    </div>
  );
}