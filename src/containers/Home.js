import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = state => ({
    generatedTeam: state.team.generatedTeam,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);