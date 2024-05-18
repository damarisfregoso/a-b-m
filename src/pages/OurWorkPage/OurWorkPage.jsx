import { useTranslation } from "react-i18next";

export default function OurWorkPage() {
  const { t } = useTranslation()

  const {workTitle} = t("sloganTitles");
  return (
    <h1>{workTitle}</h1>
  );
}