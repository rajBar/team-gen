import React, {useState} from 'react';

const GenerateTeamScreen = props => {
    const { generateTeam, playerNames } = props;
    const [playerList, setPlayerList] = useState(playerNames);

    const playerTextBox = (playerName, index) => (
        <div style={{marginTop: "2px", verticalAlign: "middle"}}>
            <input placeholder={"Players Name"} style={{marginRight: "3px"}} value={playerName} onChange={event => updateUserName(index, event)} />
            <button style={{position: "relative", bottom: "-2px"}} className={"buttonSmall buttonRed"} onClick={() => removePlayTextBox(index)}>✖</button>
            <br />
        </div>
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
                <button style={{marginTop: "10px", fontSize: "22px", padding: "2px 6px 0 6px"}} className={"buttonSmall buttonGreen"} onClick={() => newPlayerTextBox()}>+</button>
            </span>
            <br />
            <br />
            <button className={"button buttonBlue"} onClick={() => generateTeam(playerList)}>Generate Team</button>
            <br />
            <br />
        </div>
    )
}

export default GenerateTeamScreen;
