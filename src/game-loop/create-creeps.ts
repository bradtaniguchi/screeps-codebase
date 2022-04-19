import { createBasicHarvester } from "models/harvesters/basic/create-basic-harvester";
import { MyCreeps } from "./get-creeps";

/**
 * Creates creeps based around pre-existing creeps types.
 */
export const createCreeps = ({ myCreeps }: { myCreeps: MyCreeps }) => {
  const { harvesters } = myCreeps;
  createHarvesters({ harvesters });
};

const createHarvesters = ({ harvesters }: { harvesters: Creep[] }) => {
  if (harvesters.length < 3) {
    // TODO: update hard-coded harvester amount
    createBasicHarvester({
      spawnName: "Spawn1", // TODO: update hard-coded spawn name
      harvesters
    });
  }
};

// if(Game.spawns['Spawn1'].spawning) {
//   var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
//   Game.spawns['Spawn1'].room.visual.text(
//       '🛠️' + spawningCreep.memory.role,
//       Game.spawns['Spawn1'].pos.x + 1,
//       Game.spawns['Spawn1'].pos.y,
//       {align: 'left', opacity: 0.8});
// }
