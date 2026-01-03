export interface LocalGovernmentArea {
  name: string;
}

export interface SenatorialDistrict {
  district: string;
  lgas: string[];
}

export interface StateData {
  state: string;
  capital: string;
  geopolitical_zone: string;
  lgas: string[];
  senatorial_districts: SenatorialDistrict[];
}

export interface LGAInfo {
  lga: string;
  state: string;
  capital: string;
  geopolitical_zone: string;
}

export interface CapitalInfo {
  state: string;
  capital: string;
}

export interface Statistics {
  totalStates: number;
  totalLGAs: number;
  averageLGAsPerState: number;
  stateWithMostLGAs: {
    state: string;
    count: number;
  };
  stateWithLeastLGAs: {
    state: string;
    count: number;
  };
}

/**
 * Returns all states with their local governments and senatorial districts
 */
export function all(): StateData[];

/**
 * Returns an array of all Nigeria state names
 */
export function states(): string[];

/**
 * Returns senatorial districts for the specified state
 * @param state - The name of the state (case-insensitive)
 * @throws Error if state is empty or not found
 */
export function senatorial_districts(state: string): SenatorialDistrict[];

/**
 * Returns the state data including local governments for the specified state
 * @param state - The name of the state (case-insensitive)
 * @throws Error if state is empty or not found
 */
export function lgas(state: string): StateData;

/**
 * Returns all geopolitical zones with their states
 */
export function geopolitical_zones(): Record<string, string[]>;

/**
 * Returns states in a specific geopolitical zone
 * @param zone - The name of the geopolitical zone (case-insensitive)
 * @throws Error if zone is empty or not found
 */
export function states_in_zone(zone: string): string[];

/**
 * Returns state data by capital city name
 * @param capital - The name of the capital city (case-insensitive)
 * @throws Error if capital is empty or not found
 */
export function state_by_capital(capital: string): StateData;

/**
 * Finds which state an LGA belongs to
 * @param lgaName - The name of the LGA (case-insensitive)
 * @throws Error if LGA is empty or not found
 */
export function lga_state(lgaName: string): LGAInfo;

/**
 * Returns the number of LGAs in a state
 * @param state - The name of the state (case-insensitive)
 * @throws Error if state is empty or not found
 */
export function lga_count(state: string): number;

/**
 * Returns the number of senatorial districts in a state
 * @param state - The name of the state (case-insensitive)
 * @throws Error if state is empty or not found
 */
export function senatorial_district_count(state: string): number;

/**
 * Checks if a state name is valid
 * @param state - The name of the state (case-insensitive)
 */
export function is_valid_state(state: string): boolean;

/**
 * Checks if an LGA exists (optionally in a specific state)
 * @param lgaName - The name of the LGA (case-insensitive)
 * @param stateName - Optional state name to narrow the search
 */
export function is_valid_lga(
  lgaName: string,
  stateName?: string | null
): boolean;

/**
 * Returns a random state
 */
export function random_state(): StateData;

/**
 * Returns a random LGA with its state information
 */
export function random_lga(): LGAInfo;

/**
 * Searches for states by partial name match
 * @param query - The search query (case-insensitive)
 * @throws Error if query is empty
 */
export function search_state(query: string): StateData[];

/**
 * Searches for LGAs across all states by partial name match
 * @param query - The search query (case-insensitive)
 * @throws Error if query is empty
 */
export function search_lga(query: string): LGAInfo[];

/**
 * Returns all state capitals
 */
export function capitals(): CapitalInfo[];

/**
 * Returns statistics about Nigeria states and LGAs
 */
export function statistics(): Statistics;

declare const _default: {
  all: typeof all;
  states: typeof states;
  senatorial_districts: typeof senatorial_districts;
  lgas: typeof lgas;
  geopolitical_zones: typeof geopolitical_zones;
  states_in_zone: typeof states_in_zone;
  state_by_capital: typeof state_by_capital;
  lga_state: typeof lga_state;
  lga_count: typeof lga_count;
  senatorial_district_count: typeof senatorial_district_count;
  is_valid_state: typeof is_valid_state;
  is_valid_lga: typeof is_valid_lga;
  random_state: typeof random_state;
  random_lga: typeof random_lga;
  search_state: typeof search_state;
  search_lga: typeof search_lga;
  capitals: typeof capitals;
  statistics: typeof statistics;
};

export default _default;
