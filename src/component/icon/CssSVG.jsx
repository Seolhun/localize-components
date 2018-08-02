import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const ALGIN = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
};

export const POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
};

const CssSVG = ({
  src,

  children,
  alt,
  bgColor,
  color,
  iconClassName,
  padding,
  position,
  style,
}) => (
  position === POSITION.RIGHT
    ? (
      <Fragment>
        {children}
        <i
          className={`${src} ${iconClassName}`}
          alt={alt}
          style={{
            padding: `${padding}`,
            WebkitTextFillColor: color,
            backgroundColor: bgColor,
            ...style,
          }}
        />
      </Fragment>
    )
    : (
      <Fragment>
        <i
          className={`${src} ${iconClassName}`}
          alt={alt}
          style={{
            padding: `${padding}`,
            WebkitTextFillColor: color,
            backgroundColor: bgColor,
            ...style,
          }}
        />
        {children}
      </Fragment>
    )
);

CssSVG.propTypes = {
  // isRequired
  src: PropTypes.string.isRequired,

  // isNotRequired
  children: PropTypes.node,
  alt: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  iconClassName: PropTypes.string,
  padding: PropTypes.string,
  position: PropTypes.string,
  style: PropTypes.shape({
    borderRadius: PropTypes.string,
  }),
};

CssSVG.defaultProps = {
  children: null,
  iconClassName: '',
  alt: '',
  padding: '5px',
  position: POSITION.LEFT,
  color: '#5f42ff',
  bgColor: '#fff',
  style: {
    borderRadius: '6px',
  },
};

export default CssSVG;
