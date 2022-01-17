import * as actionTypes from '../actionTypes';

export const generateTeam = (team) => ({
    type: actionTypes.GENERATE_TEAM,
    payload: { team },
});