import { createBasicHarvester } from "models/harvesters/basic/create-basic-harvester";
import { MyCreeps } from "./get-creeps";

/**
 * Creates creeps based around pre-existing creeps types.
 */
export const createCreeps = ({ myCreeps }: { myCreeps: MyCreeps }) => {
  const { harvesters } = myCreeps;
  createHarvesters({ harvesters });
};

/**
 * Creates harvesters based around pre-existing harvesters types.
 *
 * TODO: update hard-code
 */
const createHarvesters = ({ harvesters }: { harvesters: Creep[] }) => {
  const spawnName = "hq-spawn";
  if (harvesters.length < 3) {
    const spawn = Game.spawns[spawnName];
    if (!spawn) {
      console.error("no spawn found with name:" + spawnName);
      return;
    }
    if (spawn.spawning) {
      console.log("spawning...");

      return;
    }
    console.log(`Creating harvester ${harvesters.length} / 3 at ${spawnName}`);

    console.log(
      "created harvester: " +
        createBasicHarvester({
          spawnName,
          harvesters
        })
    );
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
