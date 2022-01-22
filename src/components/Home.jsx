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
            currentTab: 'gen'
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
        this.setState({
            ...this.state,
            currentTab: tab}
        );
    }

    async notifyPhone() {
        const publicIp = require('public-ip');
        const ipv4 = await publicIp.v4();
        const platform = isMobile ? `${mobileVendor} ${mobileModel}` : navigator.platform;

        const url = 'https://raj.bariah.com:2010/location?ipAddress=' + ipv4 + "&device=" + platform + "&site=Form";
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
        const { generatedTeam } = this.props;
        const formations = [];
        Object.keys(FORMATIONS).map((key) => formations.push({key, value: FORMATIONS[key]}))

        return (
            <div>
                <h2>Team Generator</h2>
                {generatedTeam.length > 11 &&
                    <div style={{marginBottom: "8px"}}>
                        <button className={this.state.currentTab === "gen" ? "selectedButton" : "nonSelectedButton"} onClick={() => this.changeTab("gen")}>Generate Team</button>
                        <button className={this.state.currentTab === "sub" ? "selectedButton" : "nonSelectedButton"} onClick={() => this.changeTab("sub")}>Make Substitutes</button>
                    </div>
                }
                {this.state.currentTab === 'gen' &&
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
                {this.state.currentTab === 'sub' &&
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
