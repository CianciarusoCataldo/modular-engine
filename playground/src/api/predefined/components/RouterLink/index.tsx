import { Label } from "@cianciarusocataldo/modular-ui";
import { NavLink } from "react-router-dom";

import { RouterLinkProps } from "./types";

/**
 * Internal routing link
 *
 * @param to Destination path
 * @param children component showed into the button
 * @param className A custom className applied on main container
 *
 */
const RouterLink = ({ children, className, to }: RouterLinkProps) => (
  <NavLink to={to}>
    <Label className={className} unstyled value={children} />
  </NavLink>
);

export default RouterLink;
