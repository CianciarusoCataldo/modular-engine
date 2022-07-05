import { Label, LabelProps } from "@cianciarusocataldo/modular-ui";
import { driveWithDarkMode } from "app/utils";

const AppLabel = (props: Omit<LabelProps, "dark">) => {
  const Component = driveWithDarkMode(Label);
  return <Component {...props} />;
};

export default AppLabel;
