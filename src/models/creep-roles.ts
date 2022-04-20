import { HARVESTER_ROLES } from "./harvesters/harvester-roles";

export const CREEP_ROLES = [...HARVESTER_ROLES] as const;

export type CreepRole = typeof CREEP_ROLES[number];
