import { connect } from 'react-redux';
import Home from '../components/Home';
import * as actions from '../store/actions'

const mapStateToProps = state => ({
    generatedTeam: state.team.generatedTeam,
});

const mapDispatchToProps = dispatch => ({
    changeFormation: formation => dispatch(actions.changeFormation(formation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);