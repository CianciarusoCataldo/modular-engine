import { isInDarkMode } from "modular-plugins";
import { useSelector } from "react-redux";

/**
 * Enhance the element with the dark-mode parameter, from global state
 *
 * @param Element component to drive with the dark mode
 * @returns the same component, enhanced with dark mode parameter
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const driveWithDarkMode = (Element: (props: any) => JSX.Element) => {
  const Component = (args: any) => {
    const dark = useSelector(isInDarkMode);

    return <Element {...args} dark={dark} />;
  };

  return Component;
};
