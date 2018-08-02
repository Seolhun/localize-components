import React from 'react';
import PropTypes from 'prop-types';

import BoxInput from './input/BoxInput';
import UnderLineInput from './input/UnderLineInput';

export const INPUT_TYPE = {
  TEXT: 'text',
  SEARCH: 'search',
};

export const STYLE_TYPE = {
  BOX: 'box',
  UNDERLINE: 'underline',
};

const Input = (props) => {
  switch (props.styleType) {
    case STYLE_TYPE.BOX:
      return (
        <BoxInput
          {...props}
        />
      );
    default:
      return (
        <UnderLineInput
          {...props}
        />
      );
  }
};

Input.propTypes = {
  // isrequiredd
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,

  // isNotRequired
  children: PropTypes.node,
  styleType: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  children: null,
  styleType: STYLE_TYPE.BOX,
  type: INPUT_TYPE.TEXT,
  placeholder: '',
  className: '',
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
  hasError: false,
  errorMessage: '',
};

export default Input;
