export type NaijaStatesResponseType = { state: string, senatorial_districts: string[], lgas: string[] }
interface NaijaStatesInterface {

    /**
     * Get all states and local government
     * @returns {NaijaStatesResponseType[]}
     */
    all: () => NaijaStatesResponseType[];

    /**
     * Get all Nigeria states
     * @returns {string[]}
     */
    states: () => string[];

    /**
     * Get Senatorial Districts
     * @param {string} state - return key from Array<states>
     * @returns {string[]}
     */
    senatorial_districts: (state: string) => string[];

    /**
     * Get local government of the input state.
     * @param {string} state - return key from Array<states>
     * @returns {NaijaStatesResponseType}
     */
    lgas: (state: string) => NaijaStatesResponseType;
}

declare const NaijaStates: NaijaStatesInterface;

export default NaijaStates
