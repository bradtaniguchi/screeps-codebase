import { runBasicHarvester } from "models/harvesters/basic/run-basic-harvester";
import { MyCreeps } from "./get-creeps";

export const runCreeps = ({myCreeps}: {myCreeps: MyCreeps}) => {
  const {harvesters} = myCreeps;
  runHarvesters({ harvesters });
};


const runHarvesters = ({harvesters}: {harvesters: Creep[]}) => {
  for (let harvester of harvesters) {
    // TODO: verify type
    runBasicHarvester(harvester);
  }
}
