import { createModularSelector } from "modular-engine-tools";
import {
  getHomePage,
  getRouterPluginConfig,
  getRouterView,
  getRoutes,
} from "modular-plugins";
import { Card } from "modular-ui-components";
import { SelectorsButtons } from "./helper";

export const RouterPluginSelectorsCard = () => {
  const selectorCards = [
    {
      name: "getRouterView",
      selector: getRouterView,
    },
    {
      name: "getRouterPluginConfig",
      selector: getRouterPluginConfig,
    },
    {
      name: "getRoutes",
      selector: getRoutes,
    },
    {
      selector: createModularSelector(getHomePage, (homePage) => ({
        homePage,
      })),
      name: "getHomePage",
    },
  ];

  return (
    <Card
      header={"Router plugin"}
      key="router_plugin"
      dark
      body={
        <div className="flex flex-col items-center">
          <SelectorsButtons selectors={selectorCards} />
        </div>
      }
    />
  );
};
