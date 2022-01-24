import React, {Component} from 'react';
import {isMobile, mobileVendor, mobileModel} from 'react-device-detect';
import * as FORMATIONS from '../utils/consts/formationsConsts';
import GenerateTeamScreen from "../containers/GenerateTeamScreen";
import GeneratedTeamDisplay from "../containers/GeneratedTeamDisplay";
import SubstituteMaker from "../containers/SubstituteMaker";
import './Home-style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alerted: false,
            currentFormation: FORMATIONS.FOUR_FOUR_TWO,
        };

        this.formationChange = this.formationChange.bind(this);
    }

    formationChange(event) {
        const { changeFormation } = this.props;
        const newFormation = event.target.value;
        changeFormation(newFormation);
        this.setState({
            ...this.state,
            currentFormation: newFormation
        });
    }

    changeTab(tab) {
        const { changeTab } = this.props;
        changeTab(tab);
    }

    async notifyPhone() {
        const publicIp = require('public-ip');
        const ipv4 = await publicIp.v4();
        const platform = isMobile ? `${mobileVendor} ${mobileModel}` : navigator.platform;

        const url = 'https://maker.ifttt.com/trigger/site_visited/with/key/b_Yu8_AU_JIDYDYR_WXF5-?value1=' + ipv4 + "&value2=" + platform + "&value3=Team-Gen";
        if(!this.state.alerted) {
            fetch(url, {
                method: 'post'
            });
            this.setState({
                ...this.state,
                alerted: true,
            });
        }
    }

    render() {
        // this.notifyPhone();
        const { generatedTeam, tab } = this.props;
        const formations = [];
        Object.keys(FORMATIONS).map((key) => formations.push({key, value: FORMATIONS[key]}))

        return (
            <div>
                <h2>Team Generator</h2>
                {generatedTeam.length > 11 &&
                    <div style={{marginBottom: "8px"}}>
                        <button className={tab === "gen" ? "selectedButton" : "nonSelectedButton"} onClick={() => this.changeTab("gen")}>Generate Team</button>
                        <button className={tab === "sub" ? "selectedButton" : "nonSelectedButton"} onClick={() => this.changeTab("sub")}>Substitutes</button>
                    </div>
                }
                {tab === 'gen' &&
                    (<div>
                        <select value={this.state.currentFormation} onChange={this.formationChange}>
                            {formations.map(formation =>
                                (<option value={formation.value}>{formation.value}</option>))
                            }
                        </select>
                        <br />
                        <GenerateTeamScreen />
                        {generatedTeam && <GeneratedTeamDisplay />}
                    </div>)
                }
                {tab === 'sub' &&
                    <div>
                        <GeneratedTeamDisplay />
                        <SubstituteMaker />
                    </div>
                }
            </div>
        )
    }
}

export default Home;
