import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer } from "@cianciarusocataldo/modular-ui";
import { driveWithDarkMode } from "app/utils";
import { closeDrawer } from "api/actions";
import { isDrawerOpen } from "api/selectors";

/** Custom Modular-app drawer */
const AppDrawer = ({
  logo,
  children,
  elements,
}: {
  logo?: JSX.Element;
  children?: JSX.Element;
  elements?: any[];
}) => {
  const dispatch = useDispatch();
  const isDrawerShowing = useSelector(isDrawerOpen);

  React.useEffect(() => {
    if (isDrawerShowing) {
      let element = document.getElementById("modular-drawer");

      document.getElementById("app-container")!.onclick = function (e: Event) {
        if (element && !element.contains(e.target as Node)) {
          dispatch(closeDrawer());
        }
      };
    } else {
      document.getElementById("app-container")!.onclick = null;
    }
  }, [dispatch, isDrawerShowing]);

  const DrawerComponent = driveWithDarkMode(Drawer);

  return (
    <DrawerComponent
      logo={logo}
      hide={!isDrawerShowing}
      onClose={() => {
        dispatch(closeDrawer());
      }}
      elements={elements}
    >
      {children}
    </DrawerComponent>
  );
};

export default AppDrawer;
