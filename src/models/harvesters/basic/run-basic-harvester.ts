/**
 * Basic harvesters gather energy and transfer them to one of three targets:
 * - spawn
 * - tower
 * - extension
 */
export const runBasicHarvester = (creep: Creep) => {
  // Default all harvesters not doing something to be idle/not-working.
  creep.memory.working = false;
  const capacity = creep.store.getFreeCapacity(RESOURCE_ENERGY);
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
        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
      );
    }
  });
  if (!structure) return; // TODO: handle as will be idle
  const transferResult = creep.transfer(structure, RESOURCE_ENERGY);
  creep.memory.working = true;
  if (transferResult === ERR_NOT_IN_RANGE) creep.moveTo(structure, { visualizePathStyle: { stroke: "#ffffff" } });
};
