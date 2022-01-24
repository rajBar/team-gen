import * as actionTypes from '../actionTypes';

export const generateTeam = team => ({
    type: actionTypes.GENERATE_TEAM,
    payload: { team },
});

export const changeFormation = formation => ({
    type: actionTypes.CHANGE_FORMATION,
    payload: { formation },
});

export const generateSubstitutes = () => ({
    type: actionTypes.GENERATE_SUBSTITUTES,
});

export const dontMakeSubstitute = () => ({
    type: actionTypes.DONT_MAKE_SUBSTITUTE,
});

export const makeSubstitute = () => ({
    type: actionTypes.MAKE_SUBSTITUTE,
});

export const changeTab = tab => ({
    type: actionTypes.CHANGE_TAB,
    payload: { tab },
})