import { createHarvesterName } from "../create-harvester-name";
import { BASIC_HARVESTER_ROLE } from "./basic-harvester-role";

export const createBasicHarvester = ({
  spawnName,
  harvesters
}: {
  spawnName: string;
  harvesters: Creep[];
}) => {
  const spawn = Game.spawns[spawnName];
  if (!spawn) return ERR_INVALID_ARGS;
  return spawn.spawnCreep([WORK, CARRY, MOVE], createHarvesterName({prefix: 'basic-', harvesters}), {memory: {role: BASIC_HARVESTER_ROLE}});
};



