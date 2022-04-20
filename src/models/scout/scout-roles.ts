import { BASIC_SCOUT_ROLE } from "./basic/basic-scout-role";

export const SCOUT_ROLES = [...BASIC_SCOUT_ROLE] as const;

export type ScoutRoles = typeof SCOUT_ROLES[number];
