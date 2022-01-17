import * as actionTypes from '../actionTypes/';
import * as FORMATIONS from '../../utils/consts/formationsConsts';
import formations from '../../utils/consts/formationComposition';

const initialState = {
    currentFormation: FORMATIONS.FOUR_FOUR_TWO,
    formation: formations[0].formation,
    playerNames: null,
    generatedTeam: null,
};

const removeItemAll = (arr) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === "") {
            arr.splice(i, 1);
        } else if (arr[i] === " ") {
            arr.splice(i, 1);
        } else if (arr[i] === "  "){
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const teamRandomiser = (currentTeam) => {
    const randomisedTeam = removeItemAll(currentTeam);
    while (randomisedTeam.length < 11) {
        randomisedTeam.push("???");
    }

    return shuffle(randomisedTeam);
}

const generateTeam = (state, action) => {
    const currentTeam = action.payload.team;
    const generatedTeam = teamRandomiser([...currentTeam]);
    console.log(generatedTeam);
    return {
        ...state,
        playerNames: generatedTeam,
        generatedTeam: generatedTeam,
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GENERATE_TEAM:
            return generateTeam(state, action);
        default:
            return state;
    }
};