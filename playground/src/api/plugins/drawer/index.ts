import { DrawerPlugin } from "./types";

import AppDrawer from "./component";

const drawerPlugin: DrawerPlugin = () => ({
  feature: "drawer",
  insideAppContainer: false,
  component: AppDrawer,
  field: (creator) => {
    let drawerConfig: Record<string, any> = creator.drawer || {};

    return {
      name: "drawer",
      content: {
        getDarkMode: drawerConfig.getDarkMode || ((state: any) => false),
        getDrawerVisibility:
          drawerConfig.getDrawerVisibility || ((state: any) => false),
        onClose: drawerConfig.onClose || (() => {}),
        content: drawerConfig.content || null,
      },
    };
  },
});

export default drawerPlugin;
