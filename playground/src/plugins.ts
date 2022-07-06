import { modalPlugin } from "modular-plugin-modal";
import { epicsPlugin } from "modular-plugin-epics";
import { urlCheckerPlugin } from "modular-plugin-url-checker";
import { localizationPlugin } from "modular-plugin-localization";
import { routerPlugin } from "modular-plugin-router";
import { uiPlugin } from "modular-plugin-ui";
import { themerPlugin } from "modular-plugin-themer";

const plugins = [
  localizationPlugin,
  epicsPlugin,
  routerPlugin,
  modalPlugin,
  themerPlugin,
  uiPlugin,
  urlCheckerPlugin,
];

export default plugins;
