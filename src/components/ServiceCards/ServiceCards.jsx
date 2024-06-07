import './ServiceCards.css';
import { useTranslation } from "react-i18next";

export default function ServiceCards() {

  const { t } = useTranslation()

  const {AppAndCab, Decks, Electrical, HomeRepairs, Painting, Plumbing, Remodeling, Roofing} = t("serviceTitles");
  const {AppAndCabInfo, DecksInfo, ElectricalInfo, HomeRepairsInfo, PaintingInfo, PlumbingInfo, RemodelingInfo, RoofingInfo} = t("serviceSolgan");

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
          <h1>{Decks}</h1>
          <p className="card-text">{DecksInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{Electrical}</h1>
          <p className="card-text">{ElectricalInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{HomeRepairs}</h1>
          <p className="card-text">{HomeRepairsInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{Painting}</h1>
          <p className="card-text">{PaintingInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{Plumbing}</h1>
          <p className="card-text">{PlumbingInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{Remodeling}</h1>
          <p className="card-text">{RemodelingInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="" alt=""/>
        <span className="card-body">
          <h1>{Roofing}</h1>
          <p className="card-text">{RoofingInfo}</p>
        </span>
      </div>

    </div>
  );
}