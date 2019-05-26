import React from 'react';
import styles from './OnTopicFilter.css';
import { t } from 'plugin-api/beta/client/services';

// This is a horrifying hack - the filter below that gets passed into addCommentClassName() will
// ultimately have .some() called on the array to check for whether it contains the supplied tag
// (this happens in the getConditionalClassNames() function).
// There's no built-in support for the opposite operation, so we just construct an object which
// lies about the result of the some() function.
class LyingArray {
  constructor(arr) {
    this.arr = arr;
  }
  some = (x) => !this.arr.some(x);
}

export default class OnTopicFilter extends React.Component {
  tag = 'OFF_TOPIC';
  className = 'talk-plugin-off-topic-comment-ontopic';
  cn = { [this.className]: { tags: new LyingArray( [ this.tag ] ) } };

  handleChange = e => {
    if (e.target.checked) {
      this.props.addCommentClassName(this.cn);
      this.props.toggleCheckboxOnTopic();
    } else {
      const idx = this.props.commentClassNames.findIndex(
        i => i[this.className]
      );
      this.props.removeCommentClassName(idx);
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
