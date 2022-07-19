import { createModularSelector } from "modular-engine-tools";
import { isInDarkMode, getUIView } from "modular-plugins";
import { Card } from "modular-ui-components";
import { SelectorsButtons } from "./helper";

export const UiPluginSelectorsCard = () => {
  const selectorCards = [
    {
      name: "getUiView",
      selector: getUIView,
    },
    {
      selector: createModularSelector(isInDarkMode, (darkMode) => ({
        darkMode,
      })),
      name: "isInDarkMode",
    },
  ];

  return (
    <Card
      key="ui_plugin"
      header={"Ui plugin"}
      dark
      body={
        <div className="flex flex-col items-center">
          <SelectorsButtons selectors={selectorCards} />
        </div>
      }
    />
  );
};
