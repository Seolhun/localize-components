import * as React from 'react';
import styledComponents from 'styled-components';

import {
  LocalizeColor,
  LocalizeColorType,
} from '@seolhun/localize-components-types';

const styles = require('./Button.css');

export interface NewButtonProps {
  // isRequired
  children: React.ReactNode;
  // isNotRequired
  onClick?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  onMouseOver?: (...args: any[]) => any;
  onMouseOut?: (...args: any[]) => any;
  className?: string;
  fontSize?: number;
  theme?: LocalizeColorType;
  style?: {};
  disabled?: boolean;
}

const NewButton: React.SFC<NewButtonProps> = ({
  // is Required
  children,
  // is Not Required
  onClick = () => null,
  onMouseOver = () => null,
  onMouseOut = () => null,
  onBlur = () => null,
  onFocus = () => null,
  className = 'btn btn-success',
  fontSize = 12,
  style = {},
  disabled = false,
}) => (
  <button
    type="button"
    className={`${styles.btn} ${className}`}
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onBlur={onBlur}
    onFocus={onFocus}
    style={{
      ...style,
      fontSize: `${fontSize}px`,
    }}
    disabled={disabled}
  >
    {children}
  </button>
);

const StyledNewButton = styledComponents(NewButton)`
  background: ${({ theme }) => LocalizeColor[theme].main};
  color: ${({ theme }) => LocalizeColor[theme].sub};
  font-size: 14px;
  padding: 0.5em 2em;
  border: 2px solid ${({ theme }) => LocalizeColor[theme].main};
  border-radius: 6px;
`;

export default StyledNewButton;
