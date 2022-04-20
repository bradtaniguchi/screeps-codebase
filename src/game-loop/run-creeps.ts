import { BASIC_BUILDER_ROLE } from "models/builder/basic-builder-role";
import { BASIC_HARVESTER_ROLE } from "models/harvesters/basic/basic-harvester-role";
import { runBasicHarvester } from "models/harvesters/basic/run-basic-harvester";
import { MyCreeps } from "./get-creeps";

/**
 * Runs pre-existing creeps that exist
 */
export const runCreeps = ({ myCreeps }: { myCreeps: MyCreeps }) => {
  runHarvesters(myCreeps);
  runBuilders(myCreeps);
};

const runHarvesters = ({ harvesters }: MyCreeps) => {
  for (let harvester of harvesters) {
    if (harvester.memory.role === BASIC_HARVESTER_ROLE) {
      runBasicHarvester(harvester);
    }
  }
};
function runBuilders({ builders }: MyCreeps) {
  for (let builder of builders) {
    if (builder.memory.role === BASIC_BUILDER_ROLE) {
      runBasicHarvester(builder);
    }
  }
}
