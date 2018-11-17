import React from 'react';

import BoxInput from './input/BoxInput';
import UnderLineInput from './input/UnderLineInput';

export interface InputProps {
  htmlFor: string;
  value: string;
  // isNotRequired
  children?: React.ReactNode;
  className?: string;
  errorMessage?: string;
  hasError?: boolean;
  inputRef?: () => any;
  onBlur?: (...args: any[]) => any;
  onChange?: (...args: any[]) => any;
  onKeyDown?: (...args: any[]) => any;
  placeholder?: string;
  required?: boolean;
  inputStyleType?: string;
  type?: string;
}

export const INPUT_TYPE = {
  TEXT: 'text',
  SEARCH: 'search',
};

export const INPUT_STYLE_TYPE = {
  BOX: 'box',
  UNDERLINE: 'underline',
};

const Input: React.SFC<InputProps> = (props) => {
  switch (props.inputStyleType) {
    case INPUT_STYLE_TYPE.BOX:
      return <BoxInput {...props} />;
    default:
      return <UnderLineInput {...props} />;
  }
};

Input.defaultProps = {
  children: null,
  className: '',
  errorMessage: '',
  hasError: false,
  inputRef: () => null,
  onBlur: () => null,
  onChange: () => null,
  onKeyDown: () => null,
  placeholder: '',
  required: true,
  inputStyleType: INPUT_STYLE_TYPE.BOX,
  type: INPUT_TYPE.TEXT,
};

export default Input;
