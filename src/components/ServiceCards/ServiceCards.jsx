import './ServiceCards.css';
import { useTranslation } from "react-i18next";

export default function ServiceCards() {

  const { t } = useTranslation()

  const {AppAndCab} = t("serviceTitles");
  const {AppAndCabInfo} = t("serviceSolgan");

  return (
    <div className='ServiceCards'>
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://www.pennington.com/all-products/fertilizer/resources/-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/8-Steps-to-Growing-a-Healthy-Indoor-Garden-Anytime/tropical-urban-garden.jpg" alt="plants"/>
        <span className="card-body">
          <h1>{AppAndCab}</h1>
          <p className="card-text">{AppAndCabInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{}</h1>
          <p className="card-text">{}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{}</h1>
          <p className="card-text">{}</p>
        </span>
      </div>
    </div>
  );
}