import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import infoIcon from '../../assets/images/icons/info.svg';

import styles from './Tooltip.scss';

const POSITION = {
  TL: 'top-left',
  TR: 'top-right',
  TC: 'top-center',
  BL: 'bottom-left',
  BR: 'bottom-right',
  BC: 'bottom-center',
  L: 'left',
  R: 'right',
};

const setPosition = (postion) => {
  switch (postion.toLowerCase()) {
    case POSITION.TL:
      return styles[POSITION.TL];
    case POSITION.TR:
      return styles[POSITION.TR];
    case POSITION.BL:
      return styles[POSITION.BL];
    case POSITION.BR:
      return styles[POSITION.BR];
    case POSITION.BC:
      return styles[POSITION.BC];
    case POSITION.R:
      return styles[POSITION.R];
    case POSITION.L:
      return styles[POSITION.L];
    default:
      return styles[POSITION.TC];
  }
};

class Tooltip extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    position: PropTypes.string,
    color: PropTypes.string,
    iconColor: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    position: POSITION.BC,
    color: '#5f42ff',
    iconColor: '#5f42ff',
    type: 'image',
  };

  render() {
    const {
      className,
      position,
      children,
      color,
      iconColor,
      type,
    } = this.props;
    return (
      <div
        className={`${className} ${styles.tooltip}`}
      >
        {
          type === 'image'
            ? (
              <img
                src={infoIcon}
                alt="info-icon"
              />
            )
            : (
              <i
                className="fas fa-info-circle"
                style={{
                  zIndex: '50',
                }}
              />
            )
        }
        <div
          className={`${setPosition(position)} ${styles.message}`}
          style={{
            border: `1px solid ${color}`,
            color: `${iconColor}`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Tooltip;
