import React from 'react';

const SubstituteMaker = props => {
    const { generateSubstitutes, dontMakeSubstitutes, makeSubstitutes, generatedSubstitutes, subInfo } = props;

    return (
        <div style={{marginTop: "5px", marginBottom: "30px"}}>
            {generatedSubstitutes === null && <button onClick={() => generateSubstitutes()}>Generate Substitutes</button>}
            {generatedSubstitutes !== null && <button onClick={() => dontMakeSubstitutes()}>Don't make Substitutes</button>}
            {generatedSubstitutes !== null && <button onClick={() => makeSubstitutes()}>Make Substitutes</button>}
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
