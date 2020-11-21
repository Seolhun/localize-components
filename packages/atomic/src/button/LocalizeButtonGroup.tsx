import styled from '@emotion/styled';
import React from 'react';

import { LocalizeButtonProps } from './LocalizeButton';

const CLASSNAME = '__Localize__ButtonGroup';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type ExtentionProps = Omit<LocalizeButtonProps, keyof ButtonProps>;
type LocalizeButtonDirectionType = 'row' | 'column';

export interface LocalizeButtonGroupProps extends ExtentionProps {
  /**
   * Set this to change group direction
   */
  direction?: LocalizeButtonDirectionType;

  /**
   * Set this to change between buttons gutter
   * @default 0
   */
  gutter?: number;

  /**
   * Set this to change between group rounded
   * @default true
   */
  rounded?: boolean;
}

const LocalizeButtonGroupWrapper = styled.div<LocalizeButtonGroupProps>(
  ({ direction, rounded, gutter = 0 }) => {
    const radiusByRounded = rounded ? '6px' : '0';
    return {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: direction,

      ...(direction === 'column'
        ? {
            button: {
              borderRadius: '0',
            },
            'button + button': {
              marginTop: `${gutter}px`,
            },
            'button:first-of-type': {
              borderRadius: `${radiusByRounded} ${radiusByRounded} 0 0`,
            },
            'button:last-of-type': {
              borderRadius: `0 0 ${radiusByRounded} ${radiusByRounded}`,
            },
            'button:not(last-of-type)': {
              borderBottomWidth: gutter ? 1 : 0,
            },
          }
        : {
            button: {
              borderRadius: '0',
            },
            'button + button': {
              marginLeft: `${gutter}px`,
            },
            'button:first-of-type': {
              borderRadius: `${radiusByRounded} 0 0 ${radiusByRounded}`,
            },
            'button:last-of-type': {
              borderRadius: `0 ${radiusByRounded} ${radiusByRounded} 0`,
            },
            'button:not(last-of-type)': {
              borderRightWidth: gutter ? 1 : 0,
            },
          }),
    };
  },
);

const LocalizeButtonGroup: React.FC<LocalizeButtonGroupProps> = ({
  children,
  direction = 'row',
  gutter = 0,
  rounded = true,
  ...props
}) => {
  const clonedChildren = React.Children.map(
    // @ts-ignore
    children,
    (child: React.ReactElement<LocalizeButtonProps>, index) => {
      if (typeof child === 'object') {
        return React.cloneElement(child, {
          key: index + 1,
          className: CLASSNAME,
          ...props,
          ...child.props,
        });
      }
      return child;
    },
  );

  return (
    <LocalizeButtonGroupWrapper direction={direction} gutter={gutter} rounded={rounded}>
      {clonedChildren}
    </LocalizeButtonGroupWrapper>
  );
};

export { LocalizeButtonGroup };
export default LocalizeButtonGroup;
