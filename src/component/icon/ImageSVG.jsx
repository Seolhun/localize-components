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

const ImageSVG = ({
  src,
  alt,
  padding,
  position,
  children,
  iconClassName,
}) => (
  position === POSITION.RIGHT
    ? (
      <Fragment>
        {children}
        <img
          className={iconClassName}
          src={src}
          alt={alt}
          style={{
            padding,
          }}
        />
      </Fragment>
    )
    : (
      <Fragment>
        <img
          className={iconClassName}
          src={src}
          alt={alt}
          style={{
            padding,
          }}
        />
        {children}
      </Fragment>
    )
);

ImageSVG.propTypes = {
  // isRequired
  src: PropTypes.string.isRequired,

  // isNotRequired
  children: PropTypes.node,
  iconClassName: PropTypes.string,
  alt: PropTypes.string,
  padding: PropTypes.string,
  position: PropTypes.string,
};

ImageSVG.defaultProps = {
  children: null,
  iconClassName: '',
  alt: '',
  padding: '5px',
  position: POSITION.LEFT,
};

export default ImageSVG;
