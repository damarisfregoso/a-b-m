import { useTranslation } from "react-i18next";
import './ServiceCards.css';

export default function ServiceCards() {

  const { t } = useTranslation()

  const {AppAndCab, Decks, Electrical, HomeRepairs, Painting, Plumbing, Remodeling, Roofing} = t("serviceTitles");
  const {AppAndCabInfo, DecksInfo, ElectricalInfo, HomeRepairsInfo, PaintingInfo, PlumbingInfo, RemodelingInfo, RoofingInfo} = t("serviceSolgan");

  return (
    <div className='ServiceCards'>
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/7147290/pexels-photo-7147290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="plants"/>
        <span className="card-body">
          <h1>{AppAndCab}</h1>
          <p className="card-text">{AppAndCabInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/10847167/pexels-photo-10847167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Backyard Decks"/>
        <span className="card-body">
          <h1>{Decks}</h1>
          <p className="card-text">{DecksInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hand grabbing lightbulb "/>
        <span className="card-body">
          <h1>{Electrical}</h1>
          <p className="card-text">{ElectricalInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/5691639/pexels-photo-5691639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Home Repairs"/>
        <span className="card-body">
          <h1>{HomeRepairs}</h1>
          <p className="card-text">{HomeRepairsInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Painting"/>
        <span className="card-body">
          <h1>{Painting}</h1>
          <p className="card-text">{PaintingInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Plumber working on pipe fittings"/>
        <span className="card-body">
          <h1>{Plumbing}</h1>
          <p className="card-text">{PlumbingInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern Kitchen"/>
        <span className="card-body">
          <h1>{Remodeling}</h1>
          <p className="card-text">{RemodelingInfo}</p>
        </span>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <img className="card-top" src="https://images.pexels.com/photos/347152/pexels-photo-347152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Roof"/>
        <span className="card-body">
          <h1>{Roofing}</h1>
          <p className="card-text">{RoofingInfo}</p>
        </span>
      </div>

    </div>
  );
}