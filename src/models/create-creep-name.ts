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
    .map(creep => {
      const nameParts = creep.name.split("_");
      return Number(nameParts[nameParts.length - 1]);
    })
    .reduce((highest, harvestNum) => (harvestNum > highest ? harvestNum : highest), 0);

  const name = [prefix, role, highest + 1].filter(val => val !== "").join("_");

  return name;
};
