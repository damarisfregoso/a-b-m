import { useTranslation } from "react-i18next";

export default function OurServiesPage() {
  const { t } = useTranslation()

  const {serviceTitle} = t("sloganTitles");

  return (
    <div className="OurServicesPage">
      <h1>{serviceTitle}</h1>
      <div className="card">
    <img className="card-top" src="https://www.pennington.com/all-products/fertilizer/resources/-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/8-Steps-to-Growing-a-Healthy-Indoor-Garden-Anytime/tropical-urban-garden.jpg" alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
    </div>
  );
}