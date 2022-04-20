import { createBasicBuilder } from "models/builder/create-basic-builder";
import { createBasicHarvester } from "models/harvesters/basic/create-basic-harvester";
import { MyCreeps } from "./get-creeps";

/**
 * Creates creeps based around pre-existing creeps types.
 */
export const createCreeps = ({ myCreeps }: { myCreeps: MyCreeps }) => {
  createHarvesters(myCreeps);
  createBuilders(myCreeps);
};

/**
 * Creates builders based on the status of constructions within the room
 * the spawn is in.
 */
const createBuilders = ({ builders, spawnName }: { builders: Creep[]; spawnName?: string }) => {
  spawnName = spawnName ?? "hq-spawn";
  const spawn = Game.spawns[spawnName];
  if (!spawn) return;
  const sites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
  if (!sites.length) return;
  if (builders.length <= sites.length) {
    // If there are less builders than sites remaining, then create builders
    if (spawn.spawning) {
      console.log(`spawning builder at ${spawnName}...`);
      return;
    }

    const createResult = createBasicBuilder({
      spawnName,
      builders
    });

    if (createResult !== ERR_NOT_ENOUGH_ENERGY)
      console.log(`Creating builder ${builders.length} / ${sites.length} at ${spawnName}`);

    if (createResult === ERR_NAME_EXISTS) console.log("builder name already exists");
  }
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
      console.log(`spawning harvester at ${spawnName}...`);

      return;
    }

    const createResult = createBasicHarvester({
      spawnName,
      harvesters
    });

    if (createResult !== ERR_NOT_ENOUGH_ENERGY)
      console.log(`Creating harvester ${harvesters.length} / ${maxHarvesters} at ${spawnName}`);

    if (createResult === ERR_NAME_EXISTS) console.log("harvester name already exists");
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
