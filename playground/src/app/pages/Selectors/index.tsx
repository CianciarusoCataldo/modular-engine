import AppPage from "../../components/AppPage";
import { LocalizationPluginSelectorsCard } from "./cards/localization";
import { ModalPluginSelectorsCard } from "./cards/modal";
import { RouterPluginSelectorsCard } from "./cards/router";
import { UiPluginSelectorsCard } from "./cards/ui";

const SelectorsPage = () => {
  return (
    <AppPage>
      <div className="flex flex-col  items-center">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row">
            <UiPluginSelectorsCard />
            <RouterPluginSelectorsCard />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row">
            <LocalizationPluginSelectorsCard />
            <ModalPluginSelectorsCard />
          </div>
        </div>
      </div>
    </AppPage>
  );
};

export default SelectorsPage;
