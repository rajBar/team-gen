import { connect } from 'react-redux';
import SubstituteMaker from "../components/SubstituteMaker";
import * as actions from '../store/actions'

const mapStateToProps = state => ({
    generatedSubstitutes: state.team.generatedSubs,
    subInfo: state.team.subInfo,
});

const mapDispatchToProps = dispatch => ({
    generateSubstitutes: () => dispatch(actions.generateSubstitutes()),
    dontMakeSubstitutes: () => dispatch(actions.dontMakeSubstitute()),
    makeSubstitutes: () => dispatch(actions.makeSubstitute()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubstituteMaker);
