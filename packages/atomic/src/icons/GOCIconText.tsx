import React from 'react';
import styled from '@emotion/styled';

import { GOCIcon, GOCIconProps } from './GOCIcon';

type GOCIconTextAlignType = 'left' | 'right';

export interface GOCIconTextProps extends GOCIconProps {
  /**
   * @default left
   */
  iconPlacement?: GOCIconTextAlignType;

  /**
   * @default 8px
   */
  iconTextMargin?: string;
}

export interface GOCIconTextWrapperProps {
  iconPlacement: Required<GOCIconTextProps['iconPlacement']>;

  iconTextMargin: Required<GOCIconTextProps['iconTextMargin']>;
}

const GOCIconTextWrapper = styled.div<GOCIconTextWrapperProps>(
  ({ iconPlacement }) => {
    return {
      display: 'flex',
      alignItems: 'center',
      ...(iconPlacement === 'right'
        ? {
            flexDirection: 'row-reverse',
          }
        : {
            flexDirection: 'row',
          }),
    };
  },
);

const GOCIconContainer = styled.span<GOCIconTextWrapperProps>(
  ({ iconPlacement, iconTextMargin }) => {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      ...(iconPlacement === 'right'
        ? {
            marginLeft: iconTextMargin,
          }
        : {
            marginRight: iconTextMargin,
          }),
    };
  },
);

const GOCIconText: React.FC<GOCIconTextProps> = ({
  iconPlacement = 'left',
  iconTextMargin = '8px',
  children,
  ...props
}) => {
  return (
    <GOCIconTextWrapper
      className="goc-icon-text__wrapper"
      iconPlacement={iconPlacement}
      iconTextMargin={iconTextMargin}
      {...props}
    >
      <GOCIconContainer
        iconPlacement={iconPlacement}
        iconTextMargin={iconTextMargin}
      >
        <GOCIcon className="goc-icon-text__icon" {...props} />
      </GOCIconContainer>
      {children}
    </GOCIconTextWrapper>
  );
};

export { GOCIconText };
export default GOCIconText;
