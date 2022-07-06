import { useDispatch, useSelector } from "react-redux";

import { LANGUAGES_ICONS } from "assets/images";

import { changeLanguage, getLanguage } from "modular-plugin-localization";

import { Dropdown } from "modular-ui-components";

/** Custom Modular-app laguage selector */
const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const LANGUAGES = Object.keys(LANGUAGES_ICONS);

  return (
    <Dropdown
      dark={false}
      value={LANGUAGES.findIndex((lang) => lang === language)}
      shadow
      onChange={(lang: number) => {
        dispatch(changeLanguage(LANGUAGES[lang]));
      }}
      content={Object.keys(LANGUAGES_ICONS).map((lang) => ({
        name: lang,
        icon: LANGUAGES_ICONS[lang],
      }))}
    />
  );
};

export default LanguageSelector;
