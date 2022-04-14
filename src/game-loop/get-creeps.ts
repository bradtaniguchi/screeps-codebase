import { BASIC_HARVESTER_ROLE } from "models/harvesters/basic/basic-harvester-role";


export const getCreeps = () => Object.values(Game.creeps).reduce(
  (acc, creep) => {
    if(BASIC_HARVESTER_ROLE.includes(creep.memory.role)) {
      acc.harvesters.push(creep);
    }

    return acc;
  },
  { harvesters: [] } as MyCreeps
);


export interface MyCreeps {
  /**
   * Harvesters are general workers and the primary creep type
   */
  harvesters: Creep[];
}
