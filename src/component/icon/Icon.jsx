import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CssSVG from './CssSVG';
import ImageSVG from './ImageSVG';

import styles from './Icon.scss';

export const ICON_TYPE = {
  IMAGE: 'image',
  CSS: 'css',
};

export const ALGIN = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
};

export const POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
};

const setAlign = (align) => {
  switch (align) {
    case ALGIN.RIGHT:
      return styles.right;
    case ALGIN.CENTER:
      return styles.center;
    default:
      return styles.left;
  }
};

class Icon extends PureComponent {
  static propTypes = {
    // isRequired
    src: PropTypes.string.isRequired,

    // isNotRequired
    type: PropTypes.string,
    children: PropTypes.node,
    alt: PropTypes.string,
    onClick: PropTypes.func,

    className: PropTypes.string,
    iconClassName: PropTypes.string,
    padding: PropTypes.string,
    position: PropTypes.string,
    align: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    cursor: PropTypes.string,
    style: PropTypes.shape({
      borderRadius: PropTypes.string,
    }),
  };

  static defaultProps = {
    type: ICON_TYPE.CSS,
    children: null,
    alt: '',
    onClick: () => null,

    className: '',
    iconClassName: '',
    padding: '5px',
    position: POSITION.LEFT,
    align: ALGIN.LEFT,
    color: '#5f42ff',
    bgColor: 'transparent',
    cursor: 'pointer',
    style: {
      borderRadius: '6px',
    },
  };

  renderIcon() {
    const { type } = this.props;
    switch (type) {
      case ICON_TYPE.IMAGE:
        return (
          <ImageSVG
            {...this.props}
          />
        );
      default:
        return (
          <CssSVG
            {...this.props}
          />
        );
    }
  }

  render() {
    const {
      className, align, onClick, cursor,
    } = this.props;
    return (
      <span
        className={`${className} ${styles.icon} ${setAlign(align)}`}
        onClick={onClick}
        role="presentation"
        style={{
          cursor,
        }}
      >
        {this.renderIcon()}
      </span>
    );
  }
}

export default Icon;
