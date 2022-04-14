/**
 * Basic harvesters gather energy and transfer them to one of three targets:
 * - spawn
 * - tower
 * - extension
 */
export const runBasicHarvester = (creep: Creep) => {
  // Default all harvesters not doing something to be idle/not-working.
  creep.memory.working = false;
  if (!creep.store.getFreeCapacity()) {
    const source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if (!source) return; // TODO: handle as will be idle
    creep.memory.working = true;
    creep.memory.room = source.room.name;
    creep.moveTo(source);
  }
  // If the creep is "full" then go to a structure.
  // TODO: optimize to go to the "correct" structure.
  const structure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
    filter: (structure) => (structure.structureType === STRUCTURE_EXTENSION ||
      structure.structureType === STRUCTURE_SPAWN ||
      structure.structureType === STRUCTURE_TOWER) &&
    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
    }
  );
  if (!structure) return; // TODO: handle as will be idle
  const successfulTransfer = creep.transfer(structure, RESOURCE_ENERGY);
  creep.memory.working = true;
  if (successfulTransfer === ERR_NOT_IN_RANGE) {
    creep.moveTo(structure, {visualizePathStyle: {stroke: '#ffffff'}});
  }

};
