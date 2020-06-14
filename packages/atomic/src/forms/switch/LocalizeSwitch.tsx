import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeStyleProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeFormOptionProps } from '../types';

const SWITCH_CIRCLE = 25;
const SWITCH_CONTAINER_WIDTH = SWITCH_CIRCLE * 2 + 2;
const SWITCH_CONTAINER_HEIGHT = SWITCH_CIRCLE + 2;

const DEFAULT_CLASSNAME = '__Localize__Switch';
type InputProps = React.HTMLAttributes<HTMLInputElement>;
type LocalizeInputFormProps = LocalizeFormOptionProps & InputProps;

interface LocalizeSwitchProps
  extends LocalizeStyleProps,
    LocalizeInputFormProps {
  /**
   * Set this to change Switch name
   * @default undefined
   */
  name?: string;
}

const StyledSwitchLabel = styled.label<LocalizeStyleProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      position: 'relative',
      display: 'inline-block',
      width: `${SWITCH_CONTAINER_WIDTH}px`,
      height: `${SWITCH_CONTAINER_HEIGHT}px`,
      userSelect: 'none',

      [`input:checked + .${DEFAULT_CLASSNAME}__Slider:before`]: {
        boxShadow: `0 0 1px 2px ${theme.colors.uiColor07}`,
        transform: `translateX(${SWITCH_CIRCLE}px)`,
      },
    };
  },
);

const StyledSwitchInput = styled.input(() => {
  return {
    opacity: 0,
    width: 0,
    height: 0,
  };
});

const StyledSlider = styled.span<
  LocalizeStyleProps & LocalizeFormOptionProps,
  LocalizeThemeProps
>(({ theme, primaryColor }) => {
  const mainColor = theme.colors[primaryColor || 'primary01'];
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: theme.colors.primaryBackground01,
    borderRadius: '35px',
    cursor: 'pointer',
    transition: 'all 0.4s',

    ['&:before']: {
      content: '""',
      position: 'absolute',
      left: '1px',
      top: '1px',
      height: `${SWITCH_CIRCLE}px`,
      width: `${SWITCH_CIRCLE}px`,
      backgroundColor: mainColor,
      borderRadius: '50%',
      transition: 'all 0.4s',
    },
  };
});

const LocalizeSwitch: React.FC<LocalizeSwitchProps> = ({
  name,
  className,
  ...props
}) => {
  return (
    <StyledSwitchLabel
      key={name}
      htmlFor={name}
      className={classnames(`${DEFAULT_CLASSNAME}__Label`, className)}
    >
      <StyledSwitchInput
        {...props}
        className={classnames(`${DEFAULT_CLASSNAME}__Input`)}
        type="checkbox"
        id={name}
        name={name}
      />
      <StyledSlider className={classnames(`${DEFAULT_CLASSNAME}__Slider`)} />
    </StyledSwitchLabel>
  );
};

export { LocalizeSwitchProps, LocalizeSwitch };
export default LocalizeSwitch;
