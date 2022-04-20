/**
 * Basic builders build any structure nearby without question.
 * These currently gather resources themselves and use it to build.
 */
export const runBasicBuilder = (creep: Creep) => {
  buildClosest({ creep });
};

/**
 * Builds whatever construction site is closest
 * TODO: move to "actions" folder
 */
const buildClosest = ({ creep }: { creep: Creep }) => {
  creep.memory.working = false;
  const capacity = creep.store.getFreeCapacity(RESOURCE_ENERGY);
  if (capacity) {
    const source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if (!source) return; // TODO: handle as will be idle
    creep.memory.working = true;
    creep.memory.room = source.room.name;
    const harvestResult = creep.harvest(source);
    if (harvestResult === ERR_NOT_IN_RANGE) creep.moveTo(source, { visualizePathStyle: { stroke: "#00ff00" } });
    return;
  }

  const sites = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES, {
    // TODO: make this configurable
    filter: site => site.structureType === STRUCTURE_ROAD
  });
  if (!sites) return; // TODO: handle as will be idle
  creep.memory.working = true;
  const buildResult = creep.build(sites);
  if (buildResult === ERR_NOT_IN_RANGE) creep.moveTo(sites, { visualizePathStyle: { stroke: "#00ff00" } });
};
