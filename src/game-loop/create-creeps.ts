import { BASIC_HARVESTER_ROLE } from "models/harvesters/basic/basic-harvester-role";
import { createBasicHarvester } from "models/harvesters/basic/create-basic-harvester";

export const createCreeps = () => {
  const { harvesters } = Object.values(Game.creeps).reduce(
    (acc, creep) => {
      if(BASIC_HARVESTER_ROLE.includes(creep.memory.role)) {
        acc.harvesters.push(creep);
      }

      return acc;
    },
    { harvesters: [] } as {
      harvesters: Creep[];
    }
  );

  createHarvesters({ harvesters });

};

const createHarvesters = ({harvesters}: {harvesters: Creep[]}) => {
  if (harvesters.length < 3) {
    // TODO: update hard-coded harvester amount
    createBasicHarvester({
      spawnName: 'Spawn1', // TODO: update hard-coded spawn name
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
