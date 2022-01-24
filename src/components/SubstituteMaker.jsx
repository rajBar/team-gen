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
            <br />
            {subInfo !== null &&
                subInfo.map((sub, i) => {
                    if (i === 0) return (<div style={{margin: "6px"}}><b>{sub.position}: {sub.on}</b> coming on for <b>{sub.off}</b> (new Lino)</div>)
                    return (<div style={{margin: "6px"}}><b>{sub.position}: {sub.on}</b> coming on for <b>{sub.off}</b></div>)
                })
            }
        </div>
    )
}

export default SubstituteMaker;
