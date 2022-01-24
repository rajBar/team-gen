import React from 'react';
import './button-style.css';

const SubstituteMaker = props => {
    const { generateSubstitutes, dontMakeSubstitutes, makeSubstitutes, generatedSubstitutes, subInfo } = props;

    return (
        <div style={{marginTop: "5px", marginBottom: "30px"}}>
            {generatedSubstitutes === null && <button className={"button buttonBlue"} onClick={() => generateSubstitutes()}>Generate Substitutes</button>}
            {generatedSubstitutes !== null && <button className={"button buttonRed"} onClick={() => dontMakeSubstitutes()}>Cancel Substitutes</button>}
            {generatedSubstitutes !== null && <button className={"button buttonGreen"} style={{marginLeft: "2px"}} onClick={() => makeSubstitutes()}>Confirm Substitutes</button>}
            <br />
            {subInfo !== null && <ul style={{listStyleType: "none"}}>
                {subInfo.map(sub => {
                    return (<li>{`${sub.position}: ${sub.on} coming on for ${sub.off}`}</li>)
                })}
            </ul>}
        </div>
    )
}

export default SubstituteMaker;
