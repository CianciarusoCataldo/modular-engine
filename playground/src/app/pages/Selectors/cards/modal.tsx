import {
  getModalContext,
  getModalType,
  getModalView,
  isModalVisible,
} from "modular-plugins";
import { createModularSelector } from "modular-engine-tools";

import { Card } from "modular-ui-components";
import { SelectorsButtons } from "./helper";

export const ModalPluginSelectorsCard = () => {
  const selectorCards = [
    {
      selector: getModalView,
      name: "getModalView",
    },
    {
      selector: createModularSelector(getModalType, (type) => ({ type })),
      name: "getModalType",
    },
    {
      selector: createModularSelector(isModalVisible, (isVisible) => ({
        isVisible,
      })),
      name: "isModalVisible",
    },
    {
      selector: getModalContext,
      name: "getModalContext",
    },
  ];

  return (
    <Card
      header={"Modal plugin"}
      key="modal_plugin"
      dark
      body={
        <div className="flex flex-col items-center">
          <SelectorsButtons selectors={selectorCards} />
        </div>
      }
    />
  );
};
