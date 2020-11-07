import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps, LocalizeProps } from '@seolhun/localize-components-styled-types';

const SWITCH_CIRCLE = 25;
const SWITCH_CONTAINER_WIDTH = SWITCH_CIRCLE * 2 + 2;
const SWITCH_CONTAINER_HEIGHT = SWITCH_CIRCLE + 2;

const CLASSNAME = '__Localize__Switch';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = InputProps & LocalizeProps;

interface LocalizeSwitchProps extends Props {
  /**
   * Set this to change Switch groupName
   * @default ''
   */
  groupName?: string;

  /**
   * Set this to change Switch useValueKey
   * @default false
   */
  useValueKey?: boolean;

  /**
   * Set this to change Switch valueKey
   * @default 'value'
   */
  valueKey?: string;

  /**
   * Set this to change Switch labelKey
   * @default 'label'
   */
  labelKey?: string;

  /**
   * Set this to change Switch onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;

  /**
   * Set this to change Switch onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;
}

const StyledSwitchLabel = styled.label<LocalizeProps, LocalizeThemeProps>(({ theme }) => {
  return {
    position: 'relative',
    display: 'inline-block',
    width: `${SWITCH_CONTAINER_WIDTH}px`,
    height: `${SWITCH_CONTAINER_HEIGHT}px`,
    userSelect: 'none',

    [`input:checked + .${CLASSNAME}__Slider:before`]: {
      boxShadow: `0 0 1px 2px ${theme.colors.neutral4}`,
      transform: `translateX(${SWITCH_CIRCLE}px)`,
    },
  };
});

const StyledSwitchInput = styled.input({
  opacity: 0,
  width: 0,
  height: 0,
});

const StyledSlider = styled.span<LocalizeProps, LocalizeThemeProps>(({ theme }) => {
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: theme.colors.neutral1,
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
      backgroundColor: theme.colors.primary,
      borderRadius: '50%',
      transition: 'all 0.4s',
    },
  };
});

/**
 * TODO: Change theme key and values
 */
const LocalizeSwitch: React.FC<LocalizeSwitchProps> = ({
  className,
  groupName = '',
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  ...props
}) => {
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onChange(event);
  };

  return (
    <StyledSwitchLabel
      key={name}
      htmlFor={name}
      className={classnames(CLASSNAME, className)}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      <StyledSwitchInput
        {...props}
        id={name}
        className={`${CLASSNAME}__Input`}
        type="checkbox"
        onChange={handleChecked}
      />
      <StyledSlider className={`${CLASSNAME}__Slider`} />
    </StyledSwitchLabel>
  );
};

export { LocalizeSwitchProps, LocalizeSwitch };
export default LocalizeSwitch;
