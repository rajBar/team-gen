import { connect } from 'react-redux';
import GenerateTeamScreen from '../components/GenerateTeamScreen';
import * as actions from '../store/actions'

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    generateTeam: currentNames => dispatch(actions.generateTeam(currentNames)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeamScreen);