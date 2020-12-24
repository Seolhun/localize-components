import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps, LocalizeProps } from '@seolhun/localize-components-styled-types';

const SWITCH_CIRCLE = 25;
const SWITCH_CONTAINER_WIDTH = SWITCH_CIRCLE * 2 + 2;
const SWITCH_CONTAINER_HEIGHT = SWITCH_CIRCLE + 2;

const CLASSNAME = '__Localize__Switch';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = LocalizeProps & InputProps;

export interface LocalizeSwitchProps extends Props {
  // /**
  //  * Set this to change font Color
  //  * @default neutral1
  //  */
  // fontColor?: Props['fontColor'];
  // /**
  //  * Set this to change backgroundColor
  //  * @default primary
  //  */
  // primaryColor?: Props['primaryColor'];
  // /**
  //  * Set this to change borderColor
  //  * @default undefined
  //  */
  // neutralColor?: Props['neutralColor'];
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

const HidingInput = styled.input({
  position: 'absolute',
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
const LocalizeSwitch = React.forwardRef<HTMLInputElement, LocalizeSwitchProps>(
  ({ className, ...props }, ref) => {
    const { onChange } = props;

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <StyledSwitchLabel key={name} htmlFor={name} className={classnames(CLASSNAME, className)}>
        <HidingInput
          {...props}
          ref={ref}
          id={name}
          type="checkbox"
          className={`${CLASSNAME}__Input`}
          onChange={handleChecked}
        />
        <StyledSlider className={`${CLASSNAME}__Slider`} />
      </StyledSwitchLabel>
    );
  },
);

export { LocalizeSwitch };
export default LocalizeSwitch;
