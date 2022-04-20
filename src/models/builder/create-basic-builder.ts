import { createName } from "models/create-creep-name";
import { BASIC_BUILDER_ROLE } from "./basic-builder-role";

/**
 * Basic builders provide the ability to build structures, and provide
 * backup harvest capabilities
 */
export const createBasicBuilder = ({ spawnName, builders }: { spawnName: string; builders: Creep[] }) => {
  const spawn = Game.spawns[spawnName];
  if (!spawn) return ERR_INVALID_ARGS;
  return spawn.spawnCreep([WORK, CARRY, MOVE], createName({ role: BASIC_BUILDER_ROLE, creeps: builders }), {
    memory: { role: BASIC_BUILDER_ROLE }
  });
};
