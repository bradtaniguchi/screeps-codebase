import { createName } from "models/create-creep-name";
import { BASIC_HARVESTER_ROLE } from "./basic-harvester-role";

/**
 * Basic harvesters provide the absolute minimum capabilities for a work creep
 */
export const createBasicHarvester = ({ spawnName, harvesters }: { spawnName: string; harvesters: Creep[] }) => {
  const spawn = Game.spawns[spawnName];
  if (!spawn) return ERR_INVALID_ARGS;
  return spawn.spawnCreep([WORK, CARRY, MOVE], createName({ role: BASIC_HARVESTER_ROLE, creeps: harvesters }), {
    memory: { role: BASIC_HARVESTER_ROLE }
  });
};
