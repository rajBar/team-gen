import React, {useState} from 'react';

const GenerateTeamScreen = props => {
    const { generateTeam, playerNames } = props;
    const [playerList, setPlayerList] = useState(playerNames);

    const playerTextBox = (playerName, index) => (
        <span>
            <input placeholder={"Players Name"} style={{margin: "2px 3px"}} value={playerName} onChange={event => updateUserName(index, event)} />
            <button onClick={() => removePlayTextBox(index)} style={{backgroundColor: "red", borderRadius: "5px", color: "whitesmoke"}}>✖</button>
            <br />
        </span>
    )

    const updateUserName = (index, name) => {
        const newList = [...playerList];
        newList[index] = name.target.value;
        setPlayerList(newList);
    }

    const removePlayTextBox = index => {
        const newList = [...playerList];
        newList.splice(index, 1);
        setPlayerList(newList);
    }

    const newPlayerTextBox = () => {
        const newList = [...playerList];
        newList.push("");
        setPlayerList(newList);
    }

    return (
        <div style={{marginTop: "5px"}}>
            {playerList.map((player, i) => playerTextBox(player, i))}
            <span>
                <button onClick={() => newPlayerTextBox()} style={{backgroundColor: "darkgreen", borderRadius: "5px", color: "whitesmoke", marginTop: "5px"}}>+</button>
            </span>
            <br />
            <br />
            <button onClick={() => generateTeam(playerList)} style={{borderRadius: "5px", backgroundColor: "lightblue"}}>Generate Team</button>
            <br />
            <br />
        </div>
    )
}

export default GenerateTeamScreen;
