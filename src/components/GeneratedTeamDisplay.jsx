import React from 'react';

const GeneratedTeamDisplay = props => {
    const { generatedTeam, formation } = props;

    return (
        <div style={{marginTop: "5px", marginBottom: "30px"}}>
            {generatedTeam.map((player, i) => {
                if (i < formation.length) {
                    return <h5 style={{margin: "1px"}}>{`${formation[i]}: ${player}`}</h5>
                }
                if (i === 11) {
                    return <h5 style={{margin: "8px"}}>{`Linesman: ${player}`}</h5>
                }
                return <h5 style={{margin: "1px"}}>{`Sub: ${player}`}</h5>
            })}
        </div>
    )
}

export default GeneratedTeamDisplay;
