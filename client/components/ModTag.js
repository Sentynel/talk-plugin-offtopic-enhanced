import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ModTag.css';
import { t } from 'plugin-api/beta/client/services';
import { Icon } from 'plugin-api/beta/client/components/ui';

export default class ModTag extends React.Component {
  constructor() {
    super();

    this.state = {
      on: false,
    };
  }

  handleMouseEnter = e => {
    e.preventDefault();
    this.setState({
      on: true,
    });
  };

  handleMouseLeave = e => {
    e.preventDefault();
    this.setState({
      on: false,
    });
  };

  render() {
    const { alreadyTagged, deleteTag, postTag, comment, asset } = this.props;

    return alreadyTagged ? (
      <span
        className={cn(styles.tag, styles.offtopic)}
        onClick={deleteTag}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Icon name="label" className={cn(styles.tagIcon)} />
        {!this.state.on
          ? 'Off Topic'
          : 'On Topic'}
      </span>
    ) : (
      <span
        className={cn(styles.tag, { [styles.offtopic]: alreadyTagged })}
        onClick={postTag}
      >
        <Icon name="label" className={cn(styles.tagIcon)} />
        {alreadyTagged
          ? 'Off Topic'
          : 'Off Topic' }
      </span>
    );
  }
}

ModTag.propTypes = {
  alreadyTagged: PropTypes.bool,
  deleteTag: PropTypes.func,
  comment: PropTypes.object,
  asset: PropTypes.object,
};
