import styled from '@emotion/styled';
import { Property } from 'csstype';
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
   * Set this to change group align items
   */
  alignItems?: Property.AlignItems;

  /**
   * Set this to change group justify content
   */
  justifyContent?: Property.JustifyContent;

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
  ({ direction, alignItems, justifyContent, rounded, gutter = 0 }) => {
    const radiusByRounded = rounded ? '6px' : '0';
    return {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: direction,
      alignItems,
      justifyContent,

      ...(direction === 'column'
        ? {
            [`.${CLASSNAME}`]: {
              borderRadius: '0',
            },
            [`.${CLASSNAME} + .${CLASSNAME}`]: {
              marginTop: `${gutter}px`,
            },
            [`.${CLASSNAME}:first-of-type`]: {
              borderRadius: `${radiusByRounded} ${radiusByRounded} 0 0`,
            },
            [`.${CLASSNAME}:last-of-type`]: {
              borderRadius: `0 0 ${radiusByRounded} ${radiusByRounded}`,
            },
            [`.${CLASSNAME}:not(:last-of-type)`]: {
              borderBottomWidth: gutter > 0 ? 1 : 0,
            },
          }
        : {
          [`.${CLASSNAME}`]: {
            borderRadius: '0',
          },
          [`.${CLASSNAME} + .${CLASSNAME}`]: {
            marginLeft: `${gutter}px`,
          },
          [`.${CLASSNAME}:first-of-type`]: {
            borderRadius: `${radiusByRounded} 0 0 ${radiusByRounded}`,
          },
          [`.${CLASSNAME}:last-of-type`]: {
            borderRadius: `0 ${radiusByRounded} ${radiusByRounded} 0`,
          },
          [`.${CLASSNAME}:not(:last-of-type)`]: {
            borderRightWidth: gutter > 0 ? 1 : 0,
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
