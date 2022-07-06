import { Container, ContainerProps } from "modular-ui-components";
import { driveWithDarkMode } from "app/utils";

const AppContainer = (props: Omit<ContainerProps, "dark">) => {
  const Component = driveWithDarkMode(Container);
  return <Component {...props} />;
};

export default AppContainer;
