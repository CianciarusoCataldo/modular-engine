import { useDispatch, useSelector } from "react-redux";

import { BurgerIcon, LeftArrowIcon, LogoIcon } from "../assets/images";

import { goBack } from "modular-plugin-router";
import { isInDarkMode } from "modular-plugin-ui";
import { isHomePage } from "modular-plugin-router";

import { Button, Link } from "modular-ui-components";
import { openDrawer } from "../api/actions";
import { getAppName } from "modular-utils";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const APP_NAME = useSelector(getAppName);
  const hideHomeButton = useSelector(isHomePage);
  const dark = useSelector(isInDarkMode);

  return (
    <div className="flex flex-row">
      <div className="my-auto">
        <Button
          aria-label="drawer button"
          onClick={() => {
            dispatch(openDrawer());
          }}
          unstyled
          className="outline-none"
        >
          <div className="p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2">{BurgerIcon}</div>
        </Button>
      </div>
      <div className="my-auto">
        <Button
          aria-label="back button"
          onClick={() => {
            dispatch(goBack());
          }}
          unstyled
          className="overflow-auto ml-1 outline-none"
          hide={hideHomeButton}
        >
          {LeftArrowIcon}
        </Button>
      </div>
      <div className="m-auto flex flex-row p-2">
        <div className="mr-2 my-auto"> {LogoIcon}</div>
        <div className="flex flex-col my-auto">
          <Link
            dark={dark}
            newTab
            to="https://github.com/CianciarusoCataldo/modular-app"
          >
            <p className="break-words text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl">
              {APP_NAME}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
