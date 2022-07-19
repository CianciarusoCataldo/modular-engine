import { Modal } from "modular-ui-components";
import { ModularCreatorComponent } from "api/modular-creator-types";
import { FormsSettings } from "./types";
import { useSelector } from "react-redux";

const AppModal: ModularCreatorComponent<{ forms?: FormsSettings }> = ({
  creatorConfig,
  store,
}) => {
  const modals = creatorConfig?.forms?.modals || {};

  const props = useSelector(creatorConfig.forms?.getModalProps!);
  const dark = useSelector(creatorConfig.forms?.getDarkMode!);

  const isVisible = props.isVisible || false;

  const type = props.type || null;

  const ModalContent = type ? modals[type] || (() => <div />) : () => <div />;

  return (
    <Modal
      dark={dark}
      onClose={() => {
        creatorConfig?.forms?.onClose!(store?.dispatch!);
      }}
      //title={type ? t(type) : ""}
      hide={!isVisible}
    >
      <ModalContent />
    </Modal>
  );
};

export default AppModal;
