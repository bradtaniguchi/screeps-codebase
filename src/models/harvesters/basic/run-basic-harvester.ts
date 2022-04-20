/**
 * Basic harvesters gather energy and transfer them to one of three targets:
 * - spawn
 * - tower
 * - extension
 */
export const runBasicHarvester = (creep: Creep) => {
  // Currently only harvests basic energy
  harvest({ creep, resource: RESOURCE_ENERGY });
};

/**
 * Performs the actual harvest logic for the given resource.
 * TODO: move to "actions" folder
 */
const harvest = ({ resource, creep }: { resource: ResourceConstant; creep: Creep }) => {
  // Default all harvesters not doing something to be idle/not-working.
  creep.memory.working = false;
  const capacity = creep.store.getFreeCapacity(resource);
  if (capacity) {
    const source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if (!source) return; // TODO: handle as will be idle
    creep.memory.working = true;
    creep.memory.room = source.room.name;
    const harvestResult = creep.harvest(source);
    if (harvestResult === ERR_NOT_IN_RANGE) creep.moveTo(source, { visualizePathStyle: { stroke: "#ffffff" } });
    return;
  }
  // If the creep is "full" then go to a structure.
  const structure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
    filter: structure => {
      if (structure.structureType === STRUCTURE_CONTROLLER) {
        const progressPercentage = Math.round((structure.progress / structure.progressTotal) * 100);
        if (progressPercentage < 100) return true;
      }

      return (
        (structure.structureType === STRUCTURE_EXTENSION ||
          structure.structureType === STRUCTURE_SPAWN ||
          structure.structureType === STRUCTURE_TOWER) &&
        structure.store.getFreeCapacity(resource)! > 0
      );
    }
  });
  if (!structure) return; // TODO: handle as will be idle
  const transferResult = creep.transfer(structure, resource);
  creep.memory.working = true;
  if (transferResult === ERR_NOT_IN_RANGE) creep.moveTo(structure, { visualizePathStyle: { stroke: "#ffffff" } });
};
