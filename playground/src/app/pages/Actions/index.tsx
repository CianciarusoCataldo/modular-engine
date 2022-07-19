import AppPage from "../../components/AppPage";
import { LocalizationPluginActionsCard } from "./cards/localization";
import { RouterPluginActionsCard } from "./cards/router";
import { UiPluginActionsCard } from "./cards/ui";

const ActionsPage = () => {
  return (
    <AppPage>
      <div className="flex flex-col  items-center">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row">
          <RouterPluginActionsCard />
          <LocalizationPluginActionsCard />
          <UiPluginActionsCard />
        </div>
      </div>
    </AppPage>
  );
};

export default ActionsPage;
