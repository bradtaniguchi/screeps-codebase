/**
 * Creates construction sites between the spawns, sources
 * and the controller.
 *
 * TODO: only supports sources currently
 */
export const createRoads = ({ spawnName }: { spawnName: string }) => {
  const spawn = Game.spawns[spawnName];
  const sources = [...spawn.room.find(FIND_SOURCES), ...spawn.room.find(FIND_MY_STRUCTURES)];
  for (let source of sources) {
    const pathSteps = spawn.pos.findPathTo(source.pos, { ignoreCreeps: true });
    for (let pathStep of pathSteps) {
      spawn.room.createConstructionSite(pathStep.x, pathStep.y, STRUCTURE_ROAD);
    }
  }
};
