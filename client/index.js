import translations from './translations.json';
import OffTopicTag from './containers/OffTopicTag';
import OffTopicFilter from './containers/OffTopicFilter';
import OnTopicFilter from './containers/OnTopicFilter';
import OffTopicCheckbox from './containers/OffTopicCheckbox';
import ModTag from './containers/ModTag';
import ModActionButton from './containers/ModActionButton';
import reducer from './reducer';

/**
 * talk-plugin-offtopic depends on talk-plugin-viewing-options
 * in other to display filter.
 */

export default {
  translations,
  reducer,
  slots: {
    commentInputDetailArea: [OffTopicCheckbox],
    commentInfoBar: [OffTopicTag],
    viewingOptionsFilter: [OffTopicFilter, OnTopicFilter],
    moderationActions: [ModActionButton],
    adminCommentInfoBar: [ModTag],
  },
};
