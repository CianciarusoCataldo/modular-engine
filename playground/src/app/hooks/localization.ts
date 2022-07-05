import { useTranslation } from "react-i18next";

/** Return `home` namespace translation hook (used into `Home` page) */
export const useHomePageTranslation = () => {
  const { t } = useTranslation("home");
  return t;
};
