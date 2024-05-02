import { useTranslation } from "react-i18next";
import './WelcomePage.css'
import ReadyToStart from "../../components/ReadyToStart/ReadyToStart";

export default function WelcomePage() {
  const { t } = useTranslation()

  const {slogan, year, line1, line2, line3} = t("description");
  const {ourServ} = t("navbar");
  const {explore, pastWork} = t("buttons");

  return (
    <div className="WelcomePage">
      <div className="opening">
        <h1>{t("welcome")}</h1>
        <span>{slogan}</span>
        <h4>{year}</h4>
      </div>
      <div className="quote">
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
      </div>
      <h1 className="chooseUs">{t("chooseUs")}</h1>
      <div className="chooseUs-Box">
        <>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex obcaecati numquam aspernatur eaque doloremque, temporibus, ipsa culpa atque repellendus veniam quas possimus facere earum omnis dolores laboriosam quidem maxime unde.
          Molestias commodi modi vel ducimus exercitationem eligendi tempora? Facere enim sunt possimus officiis dolorem cum qui molestias tempora deleniti, quod temporibus distinctio necessitatibus doloribus saepe dicta dolorum perspiciatis accusamus amet!
          Blanditiis libero fuga cumque facilis! Ad est fugit natus neque reprehenderit porro deleniti eos tempore reiciendis voluptatum saepe eius id veniam ut deserunt, accusamus repellendus quae et? Impedit, unde nulla?</p>
        </>
        <>
          <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="placeholder for now" />
        </>
      </div>
      <div className="ourServices">
        <h1 className="chooseUs">{ourServ}</h1>
        <p>{t("servicesQuote")}</p>
        <div className="ourServicesBtns">
          <button className="welcomeBtns">{explore}</button>
          <button className="welcomeBtns">{pastWork}</button>
        </div>
      </div>
      <ReadyToStart />
    </div>
  );
}