import { HARVESTER_ROLES } from "./harvesters/harvester-roles";
import { SCOUT_ROLES } from "./scout/scout-roles";

export const CREEP_ROLES = [...HARVESTER_ROLES, ...SCOUT_ROLES] as const;

export type CreepRole = typeof CREEP_ROLES[number];
