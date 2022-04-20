import { CreepRole } from "./creep-roles";

/**
 * Returns the next harvester name.
 * Naming convention:
 * <prefix>_harvester_<highestNumber>
 *
 * TODO: Refactor, make generic for non-harvesters
 */
export const createName = ({ prefix, role, creeps }: { prefix?: string; role: CreepRole; creeps: Creep[] }) => {
  const highest = creeps
    .map(creep => Number(creep.name.split("_")[2]))
    .reduce((highest, harvestNum) => (harvestNum > highest ? harvestNum : highest), 0);

  return [prefix, role, highest + 1].join("_");
};
