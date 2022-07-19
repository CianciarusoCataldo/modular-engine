import {
  getLanguage,
  getLanguages,
  getLocalizationConfig,
} from "modular-plugins";
import { createModularSelector } from "modular-engine-tools";
import { Card } from "modular-ui-components";
import { SelectorsButtons } from "./helper";

export const LocalizationPluginSelectorsCard = () => {
  const selectorCards = [
    {
      selector: getLocalizationConfig,
      name: "getLocalizationConfig",
    },
    {
      selector: createModularSelector(getLanguages, (langs) => ({
        languages: langs,
      })),
      name: "getLanguages",
    },
    {
      selector: createModularSelector(getLanguage, (lang) => ({
        language: lang,
      })),
      name: "getLanguage",
    },
  ];

  return (
    <Card
      header={"Localization plugin"}
      key="localization_plugin"
      dark
      body={
        <div className="flex flex-col items-center">
          <SelectorsButtons selectors={selectorCards} />
        </div>
      }
    />
  );
};
