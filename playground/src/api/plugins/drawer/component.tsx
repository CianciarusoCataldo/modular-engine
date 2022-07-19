import React from "react";
import { useSelector } from "react-redux";

import { Drawer } from "modular-ui-components";
import { closeDrawer } from "../../../app/actions";
import { ModularCreatorComponent } from "api/modular-creator-types";
import { DrawersPluginSettings } from "./types";

const AppDrawer: ModularCreatorComponent<{
  drawer?: DrawersPluginSettings;
}> = ({ creatorConfig, store }) => {
  const dispatch = store?.dispatch!;

  const drawerConfig = creatorConfig.drawer;

  const isDrawerShowing = useSelector(drawerConfig?.getDrawerVisibility!);

  const darkMode = useSelector(drawerConfig?.getDarkMode!);
  const Content = drawerConfig?.content || (() => <div />);
  const position = drawerConfig?.position;
  const onClose = drawerConfig?.onClose;

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
  }, [isDrawerShowing, dispatch]);

  return (
    <Drawer
      dark={darkMode}
      position={position as any}
      hide={!isDrawerShowing}
      children={<Content />}
      onClose={() => {
        onClose && onClose(dispatch);
      }}
    />
  );
};

export default AppDrawer;
