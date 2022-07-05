import { CSSProperties } from "react";

import classNames from "classnames";
import {
  AppContainer,
  DarkModeSwitcher,
  LanguageSelector,
} from "api/predefined/components";

import AppHeaderContent from "contents/header";

const AppHeader = ({
  className,
  disabled,
  style,
}: {
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
}) => {
  return disabled ? (
    <div />
  ) : (
    <div>
      <AppContainer
        wrapper="header"
        className={classNames("fixed overflow-hidden top-0", className)}
        style={style}
      >
        <div className="flex flex-col">
          <div className="flex flex-col items-end">
            <div className="flex flex-row">
              <LanguageSelector />
              <DarkModeSwitcher />
            </div>
          </div>
          <AppHeaderContent />
        </div>
      </AppContainer>

      <div className={classNames(className)} style={style} />
    </div>
  );
};

export default AppHeader;
