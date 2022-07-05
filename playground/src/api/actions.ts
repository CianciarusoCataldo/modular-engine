import { createAction } from "@reduxjs/toolkit";

/**
 * Open modular-engine drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const openDrawer = createAction("@@ui/OPEN_DRAWER");

/**
 * Close modular-engine drawer
 *
 */
export const closeDrawer = createAction("@@ui/CLOSE_DRAWER");
