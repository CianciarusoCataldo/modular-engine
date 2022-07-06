import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  closeModal,
  getModalType,
  isModalVisible,
} from "modular-plugin-modal";

import { Modal } from "modular-ui-components";
import { driveWithDarkMode } from "app/utils";

/** Custom Modular-app modal */
const AppModal = ({
  modals,
}: {
  modals: Record<string, () => JSX.Element>;
}) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
  const type = useSelector(getModalType);
  const isVisible = useSelector(isModalVisible);
  const ModalContent = type && modals[type] ? modals[type] : <div />;

  const { t } = useTranslation("modal-titles");

  const ModalComponent = driveWithDarkMode(Modal);

  return (
    <ModalComponent
      onClose={onClose}
      title={type ? t(type) : ""}
      hide={!isVisible}
    >
      {ModalContent}
    </ModalComponent>
  );
};

export default AppModal;
