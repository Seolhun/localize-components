import * as React from 'react';

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
  onBlur?: (event?) => any;
  onChange?: (event?) => any;
  onKeyDown?: (event?) => any;
  placeholder?: string;
  required?: boolean;
  styleType?: string;
  type?: string;
}

export const INPUT_TYPE = {
  TEXT: 'text',
  SEARCH: 'search',
};

export const STYLE_TYPE = {
  BOX: 'box',
  UNDERLINE: 'underline',
};

const Input: React.StatelessComponent<InputProps> = (props) => {
  switch (props.styleType) {
    case STYLE_TYPE.BOX:
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
  styleType: STYLE_TYPE.BOX,
  type: INPUT_TYPE.TEXT,
};

export default Input;
