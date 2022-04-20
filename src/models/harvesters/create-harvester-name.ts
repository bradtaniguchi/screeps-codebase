export const createHarvesterName = ({ prefix, harvesters }: { prefix?: string; harvesters: Creep[] }) => {
  return `${prefix}harvester_${harvesters.length + 1}`;
};
