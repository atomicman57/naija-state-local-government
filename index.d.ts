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
  lgas: string[];
  senatorial_districts: SenatorialDistrict[];
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

declare const _default: {
  all: typeof all;
  states: typeof states;
  senatorial_districts: typeof senatorial_districts;
  lgas: typeof lgas;
};

export default _default;

