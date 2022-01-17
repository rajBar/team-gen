import React, {Component} from 'react';
import {isMobile, mobileVendor, mobileModel} from 'react-device-detect';
import * as FORMATIONS from '../utils/consts/formationsConsts';
import GenerateTeamScreen from "../containers/GenerateTeamScreen";
import GeneratedTeamDisplay from "../containers/GeneratedTeamDisplay";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alerted: false,
        };
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
                <br />
                <select>
                    {formations.map(formation =>
                        (<option>{formation.value}</option>))
                    }
                </select>
                <br />
                <GenerateTeamScreen />
                {generatedTeam && <GeneratedTeamDisplay />}
            </div>
        )
    }
}

export default Home;
