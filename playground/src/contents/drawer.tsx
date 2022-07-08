import classNames from "classnames";
import { LogoIcon } from "../assets/images";

import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, Divider, Link } from "modular-ui-components";
import { driveWithDarkMode } from "../app/utils";
import { closeDrawer } from "../api/actions";
import { getAppName } from "modular-utils";

import {
  getLocalizationConfig,
  getRoutes,
  requestRoute,
  isInDarkMode,
} from "modular-plugins";

export const DrawerLogo = () => {
  const APP_NAME = useSelector(getAppName);
  const LinkComponent = driveWithDarkMode(Link);

  return (
    <div className="flex flex-row">
      {LogoIcon}
      <LinkComponent
        to="https://github.com/CianciarusoCataldo/modular-app"
        className="ml-1 text-lg break-all"
        newTab
      >
        {APP_NAME}
      </LinkComponent>
    </div>
  );
};

export const DrawerContent = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getRoutes);
  const i18n = useSelector(getLocalizationConfig);
  const dark = useSelector(isInDarkMode);

  const { t } = useTranslation(i18n.titlesNamespace || i18n.defaultNamespace);

  return (
    <div>
      {Object.keys(PATHS)
        .sort()
        .map((route, index) => {
          return (
            <div className="mt-1 mb-3" key={`drawer_app_element_${index}`}>
              <Button
                unstyled
                onClick={() => {
                  dispatch(requestRoute(PATHS[route]));
                  dispatch(closeDrawer());
                }}
                className={classNames(
                  {
                    "text-white": dark,
                    "text-gray-600": !dark,
                  },
                  "hover:text-orange-500 text-xl"
                )}
              >
                {t(route)}
              </Button>
              <Divider dark={dark} />
            </div>
          );
        })}
    </div>
  );
};

export const DrawerElements = [];
