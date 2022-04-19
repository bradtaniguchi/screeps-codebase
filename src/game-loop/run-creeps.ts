import { BASIC_HARVESTER_ROLE } from "models/harvesters/basic/basic-harvester-role";
import { runBasicHarvester } from "models/harvesters/basic/run-basic-harvester";
import { MyCreeps } from "./get-creeps";

/**
 * Runs pre-existing creeps that exist
 */
export const runCreeps = ({ myCreeps }: { myCreeps: MyCreeps }) => {
  const { harvesters } = myCreeps;
  runHarvesters({ harvesters });
};

const runHarvesters = ({ harvesters }: { harvesters: Creep[] }) => {
  for (let harvester of harvesters) {
    if (harvester.memory.role === BASIC_HARVESTER_ROLE) {
      runBasicHarvester(harvester);
    }
  }
};
