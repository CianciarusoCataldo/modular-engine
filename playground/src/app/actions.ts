import { createModularAction } from "modular-engine-tools";

/**
 * Open drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const openDrawer = createModularAction("@@ui/OPEN_DRAWER");

/**
 * Close drawer
 *
 */
export const closeDrawer = createModularAction("@@ui/CLOSE_DRAWER");
