import { setDarkMode } from "modular-plugins";
import { Card } from "modular-ui-components";
import { ActionsButtons } from "./helper";

export const UiPluginActionsCard = () => {
  const actions = [
    {
      action: setDarkMode(true),
      name: "setDarkMode",
    },
  ];

  return (
    <Card
      header={"Ui plugin"}
      key="ui_plugin"
      dark
      body={
        <div className="flex flex-col items-center">
          <ActionsButtons actions={actions} />
        </div>
      }
    />
  );
};
