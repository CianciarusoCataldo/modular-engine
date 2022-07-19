import { createSelector } from "reselect";

import { getUIView } from "modular-plugin-ui";

/**
 * Returns modular-engine drawer visibility
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine/#ui
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isDrawerOpen = createSelector(
  getUIView,
  ({ isDrawerOpen }) => isDrawerOpen
);
