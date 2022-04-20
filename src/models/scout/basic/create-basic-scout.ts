import { createName } from "models/create-creep-name";
import { BASIC_SCOUT_ROLE } from "./basic-scout-role";

/**
 * Basic harvesters provide the absolute minimum capabilities for a work creep
 */
export const createBasicScout = ({ spawnName, scouts }: { spawnName: string; scouts: Creep[] }) => {
  const spawn = Game.spawns[spawnName];
  if (!spawn) return ERR_INVALID_ARGS;
  return spawn.spawnCreep([MOVE, CLAIM, MOVE], createName({ role: BASIC_SCOUT_ROLE, creeps: scouts }), {
    memory: { role: BASIC_SCOUT_ROLE }
  });
};
