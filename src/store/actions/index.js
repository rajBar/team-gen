import * as actionTypes from '../actionTypes';

export const generateTeam = team => ({
    type: actionTypes.GENERATE_TEAM,
    payload: { team },
});

export const changeFormation = formation => ({
    type: actionTypes.CHANGE_FORMATION,
    payload: { formation },
});