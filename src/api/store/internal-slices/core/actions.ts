/**
 * @file modular-engine internal actions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineConfig } from "modular-engine-types";

import { createModularAction } from "modular-utils";

/**
 * Dispatched when modular-engine system init is completed. Intercept this action with an epic to do some actions at the end of the init
 *
 * This actions is not meant to be dispatched outside the normal init process (so only once), as this would break the modular-engine standard flow
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const engineInitCompleted = createModularAction(
  "@@modular-engine/INIT_COMPLETED",
  (config?: ModularEngineConfig) => ({ payload: { parsedConfig: config } })
);
