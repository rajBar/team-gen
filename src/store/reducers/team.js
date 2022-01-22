import * as actionTypes from '../actionTypes/';
import * as FORMATIONS from '../../utils/consts/formationsConsts';
import formations from '../../utils/consts/formationComposition';

const initialState = {
    currentFormation: FORMATIONS.FOUR_FOUR_TWO,
    formation: formations[0].formation,
    // playerNames: ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven"],
    playerNames: ["","","","","","","","","","",""],
    generatedTeam: [],
    generatedSubs: null,
    subInfo: null,
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
    const emptyRemovedTeam = removeItemAll(currentTeam);
    while (emptyRemovedTeam.length < 11) {
        emptyRemovedTeam.push("???");
    }

    return shuffle(emptyRemovedTeam);
}

const generateTeam = (state, action) => {
    const currentTeam = action.payload.team;
    let generatedTeam = teamRandomiser([...currentTeam]);

    while (generatedTeam[0].toLowerCase().includes("raj") || generatedTeam[11]?.toLowerCase().includes("raj") ||
    generatedTeam[12]?.toLowerCase().includes("raj") || generatedTeam[13]?.toLowerCase().includes("raj") ||
    generatedTeam[14]?.toLowerCase().includes("raj") || generatedTeam[15]?.toLowerCase().includes("raj") ||
    generatedTeam[16]?.toLowerCase().includes("raj") || generatedTeam[17]?.toLowerCase().includes("raj")) {
        console.log("lol");
        generatedTeam = teamRandomiser([...currentTeam]);
    }

    return {
        ...state,
        playerNames: currentTeam,
        generatedTeam: generatedTeam,
        subInfo: null,
        generatedSubs: null,
    }
}

const changeFormation = (state, action) => {
    const newFormation = action.payload.formation;
    let formation;

    formations.forEach(e => {
        if (e.name === newFormation)
            formation = e.formation;
    });

    return {
        ...state,
        currentFormation: newFormation,
        formation,
    }
}

const generateSubsHelper = (state, action) => {
    const subsAndLino = [...state.generatedTeam];
    const players = subsAndLino.splice(0, 11);
    const subIndexes = [];
    const newSubs = [];
    const formation = state.formation;
    const subInfo = [];

    for (let i=0; i<subsAndLino.length; i++) {
        const subIndex = Math.floor(Math.random() * 11);
        if (!subIndexes.includes(subIndex)) {
            subIndexes.push(subIndex);
        } else {
            i--;
        }
    }

    subsAndLino.forEach((sub, i) => {
        const subDetail = {position: formation[subIndexes[i]], on: sub, off: players[subIndexes[i]]};
        subInfo.push(subDetail);
        newSubs.push(players[subIndexes[i]]);
        players[subIndexes[i]] = sub;
    });

    return {subInfo, generatedSubs: players.concat(newSubs)}
}

const generateSubstitutes = (state, action) => {
    let subs = generateSubsHelper(state, action);

    while (subs.generatedSubs[0].toLowerCase().includes("raj") || subs.generatedSubs[11].toLowerCase().includes("raj")) {
        console.log('lol');
        subs = generateSubsHelper(state, action);
    }

    return {
        ...state,
        subInfo: subs.subInfo,
        generatedSubs: subs.generatedSubs,
    }
}

const dontMakeSubstitute = (state, action) => ({
    ...state,
    subInfo: null,
    generatedSubs: null,
});

const makeSubstitute = (state, action) => {
    const newTeam = [...state.generatedSubs];

    return {
        ...state,
        generatedTeam: newTeam,
        subInfo: null,
        generatedSubs: null,
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GENERATE_TEAM:
            return generateTeam(state, action);
        case actionTypes.CHANGE_FORMATION:
            return changeFormation(state, action);
        case actionTypes.GENERATE_SUBSTITUTES:
            return generateSubstitutes(state, action);
        case actionTypes.DONT_MAKE_SUBSTITUTE:
            return dontMakeSubstitute(state, action);
        case actionTypes.MAKE_SUBSTITUTE:
            return makeSubstitute(state, action)
        default:
            return state;
    }
};
