import { BASIC_HARVESTER_ROLE } from "./basic/basic-harvester-role";

export const HARVESTER_ROLES = [BASIC_HARVESTER_ROLE] as const;

export type HarvesterRole = typeof HARVESTER_ROLES[number];
