import { Label, LabelProps } from "modular-ui-components";
import { driveWithDarkMode } from "app/utils";

const AppLabel = (props: Omit<LabelProps, "dark">) => {
  const Component = driveWithDarkMode(Label);
  return <Component {...props} />;
};

export default AppLabel;
