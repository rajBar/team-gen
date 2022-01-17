import { connect } from 'react-redux';
import GeneratedTeamDisplay from '../components/GeneratedTeamDisplay';

const mapStateToProps = state => ({
    generatedTeam: state.team.generatedTeam,
    formation: state.team.formation,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedTeamDisplay);