import React from 'react';
import styles from './OnTopicFilter.css';
import { t } from 'plugin-api/beta/client/services';

// This is a horrifying hack - we fake a matching tag, which ensures that the
// class will get applied to every comment.
class FakeArray {
  some = (x) => true;
}

export default class OnTopicFilter extends React.Component {
  tag = 'OFF_TOPIC';
  classNameShow = 'talk-plugin-off-topic-comment-show';
  classNameHide = 'talk-plugin-off-topic-comment-hide';
  cnShow = { [this.classNameShow]: { tags: [this.tag] } };
  cnHide = { [this.classNameHide]: { tags: new FakeArray() } };

  handleChange = e => {
    if (e.target.checked) {
      this.props.addCommentClassName(this.cnShow);
      this.props.addCommentClassName(this.cnHide);
      this.props.toggleCheckboxOnTopic();
    } else {
      const idxHide = this.props.commentClassNames.findIndex(
        i => i[this.classNameHide]
      );
      this.props.removeCommentClassName(idxHide);
      const idxShow = this.props.commentClassNames.findIndex(
        i => i[this.classNameShow]
      );
      this.props.removeCommentClassName(idxShow);
      this.props.toggleCheckboxOnTopic();
    }
  };

  render() {
    return (
      <label className={styles.label}>
        <input
          type="checkbox"
          onChange={this.handleChange}
          checked={this.props.checked}
          className={styles.input}
        />
        {t('hide_on_topic')}
      </label>
    );
  }
}
