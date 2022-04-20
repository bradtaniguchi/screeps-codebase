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
 */
const createHarvesters = ({
  harvesters,
  spawnName,
  maxHarvesters
}: {
  harvesters: Creep[];
  spawnName?: string;
  maxHarvesters?: number;
}) => {
  spawnName = spawnName ?? "hq-spawn";
  maxHarvesters = maxHarvesters ?? 10;
  if (harvesters.length <= 10) {
    const spawn = Game.spawns[spawnName];
    if (!spawn) {
      console.log("no spawn found with name:" + spawnName);
      return;
    }
    if (spawn.spawning) {
      console.log("spawning...");

      return;
    }
    console.log(`Creating harvester ${harvesters.length} / ${maxHarvesters} at ${spawnName}`);

    createBasicHarvester({
      spawnName,
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
