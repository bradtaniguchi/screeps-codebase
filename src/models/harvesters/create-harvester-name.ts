/**
 * Returns the next harvester name.
 * Naming convention:
 * <prefix>_harvester_<highestNumber>
 *
 * TODO: Refactor, make generic for non-harvesters
 */
export const createHarvesterName = ({ prefix, harvesters }: { prefix?: string; harvesters: Creep[] }) => {
  const highest = harvesters
    .map(harvester => Number(harvester.name.split("_")[2]))
    .reduce((highest, harvestNum) => (harvestNum > highest ? harvestNum : highest), 0);

  return [prefix, "harvester", highest + 1].join("_");
};
