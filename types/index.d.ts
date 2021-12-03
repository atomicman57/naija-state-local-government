declare module "naija-state-local-government-p" {
    export type NaijaStatesResponseType = { state: string, senatorial_districts: string[], lgas: string[] }
    interface NaijaStateLocalGovernmentType {

        /**
         * Get all states and local government
         * @returns {ResponseType[]}
         */
        all: () => ResponseType[];

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
    export default NaijaStateLocalGovernmentType;
}
