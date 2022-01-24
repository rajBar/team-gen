import { connect } from 'react-redux';
import Home from '../components/Home';
import * as actions from '../store/actions'

const mapStateToProps = state => ({
    generatedTeam: state.team.generatedTeam,
    tab: state.team.tab,
});

const mapDispatchToProps = dispatch => ({
    changeFormation: formation => dispatch(actions.changeFormation(formation)),
    changeTab: tab => dispatch(actions.changeTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);