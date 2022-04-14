export const createHarvesterName = ({prefix, harvesters}: {
  prefix?: string;
  harvesters: Creep[];
}) => {;
  return `${prefix}harvester-${harvesters.length}`;
};
