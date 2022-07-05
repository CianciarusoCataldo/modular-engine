import classNames from "classnames";
import { CSSProperties } from "react";

import AppFooterContent from "contents/footer";
import AppContainer from "../AppContainer";

const AppFooter = ({
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
        wrapper="footer"
        className={classNames("fixed overflow-hidden bottom-0", className)}
        style={style}
      >
        <AppFooterContent />
      </AppContainer>
      <div className={classNames(className)} style={style} />
    </div>
  );
};

export default AppFooter;
