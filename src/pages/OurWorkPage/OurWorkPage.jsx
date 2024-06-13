import { useTranslation } from "react-i18next";
import workImages from "../../utilities/work-images";
import './OurWorkPage.css'

export default function OurWorkPage() {
  const { t } = useTranslation()

  const {workTitle} = t("sloganTitles");
  return (
    <div className="OurWorkPage">
      <h1>{workTitle}</h1>

      <section className="image-gallery">
        {workImages.map((url, index) => (
          <img key={index} src={url} alt={t(`imageAlts.${index + 1}`)} />
        ))}

      </section>
    </div>
  );
}