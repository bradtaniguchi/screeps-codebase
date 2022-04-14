export const runBasicHarvester = (creep: Creep) => {
  // Default all harvesters not doing something to be idle/not-working.
  creep.memory.working = false;
  if (!creep.store.getFreeCapacity()) {
    const source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if (!source) return; // TODO: handle as will be idle
    creep.memory.working = true;
    creep.memory.room = source.room.name;
    creep.moveTo(source);
  }
  // If the creep is "full" then go to a structure.
  // TODO: optimize to go to the "correct" structure.
  const structure = creep.pos.findClosestByPath(FIND_STRUCTURES);
  if (!structure) return; // TODO: handle as will be idle

  // TODO:

};
// var roleHarvester = {

//   /** @param {Creep} creep **/
//   run: function(creep) {
//     if(creep.store.getFreeCapacity() > 0) {
//           var sources = creep.room.find(FIND_SOURCES);
//           if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//               creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
//           }
//       }
//       else {
//           var targets = creep.room.find(FIND_STRUCTURES, {
//                   filter: (structure) => {
//                       return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
//                           structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
//                   }
//           });
//           if(targets.length > 0) {
//               if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//                   creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
//               }
//           }
//       }
// }
// };

// module.exports = roleHarvester;
