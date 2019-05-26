import { connect } from 'plugin-api/beta/client/hocs';
import { bindActionCreators } from 'redux';
import { toggleCheckboxOnTopic } from '../actions';
import { commentClassNamesSelector } from 'plugin-api/alpha/client/selectors';
import OnTopicFilter from '../components/OnTopicFilter';
import {
  addCommentClassName,
  removeCommentClassName,
} from 'plugin-api/alpha/client/actions';

const mapStateToProps = state => ({
  commentClassNames: commentClassNamesSelector(state),
  checked: state.talkPluginOfftopicEnhanced.checkedOnTopic,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleCheckboxOnTopic,
      addCommentClassName,
      removeCommentClassName,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnTopicFilter);
