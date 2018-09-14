import * as React from 'react';
import styled from 'styled-components';

import { Color, ColorType } from '../../types';

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
  theme?: ColorType;
  style?: {
    color?: string;
    backgroundColor?: string;
    padding?: string;
  };
  disabled?: boolean;
}

const NewButton: React.StatelessComponent<NewButtonProps> = ({
  // is Required
  children,
  // is Not Required
  onClick = () => null,
  onMouseOver = () => null,
  onMouseOut = () => null,
  onBlur = () => null,
  onFocus = () => null,
  className = 'btn-success',
  theme = Color.primary,
  style = {
    color: '',
    backgroundColor: '',
  },
  disabled = false,
}) => (
  <button
    className={className}
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onBlur={onBlur}
    onFocus={onFocus}
    style={{
      ...style,
    }}
    disabled={disabled}
  >
    {children}
  </button>
);

const StyledNewButton = styled(NewButton)`
  /* Adapt the colours based on primary prop */
  background: ${({ theme }) => Color[theme]};
  color: ${({ theme }) => Color[theme]};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default StyledNewButton;
