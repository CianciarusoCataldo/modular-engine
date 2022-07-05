import { Container, ContainerProps } from "@cianciarusocataldo/modular-ui";
import { driveWithDarkMode } from "app/utils";

const AppContainer = (props: Omit<ContainerProps, "dark">) => {
  const Component = driveWithDarkMode(Container);
  return <Component {...props} />;
};

export default AppContainer;
