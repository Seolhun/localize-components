import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeIcon, LocalizeIconProps } from './LocalizeIcon';

type LocalizeIconTextAlignType = 'left' | 'right';

const CLASSNAME = '__Localize__IconText';
type ExtentionProps = LocalizeIconProps;

export interface LocalizeIconTextProps extends ExtentionProps {
  /**
   * @default left
   */
  iconPlacement?: LocalizeIconTextAlignType;

  /**
   * @default 8px
   */
  iconTextMargin?: string;
}

export interface LocalizeIconTextWrapperProps {
  iconPlacement: Required<LocalizeIconTextProps['iconPlacement']>;

  iconTextMargin: Required<LocalizeIconTextProps['iconTextMargin']>;
}

const LocalizeIconTextWrapper = styled.div<LocalizeIconTextWrapperProps>(({ iconPlacement }) => {
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
});

const LocalizeIconContainer = styled.span<LocalizeIconTextWrapperProps>(
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

const LocalizeIconText: React.FC<LocalizeIconTextProps> = ({
  iconPlacement = 'left',
  iconTextMargin = '8px',
  children,
  className,
  ...props
}) => {
  return (
    <LocalizeIconTextWrapper
      className={classnames(CLASSNAME, className)}
      iconPlacement={iconPlacement}
      iconTextMargin={iconTextMargin}
      {...props}
    >
      <LocalizeIconContainer iconPlacement={iconPlacement} iconTextMargin={iconTextMargin}>
        <LocalizeIcon className={`${CLASSNAME}__Icon`} {...props} />
      </LocalizeIconContainer>
      {children}
    </LocalizeIconTextWrapper>
  );
};

export { LocalizeIconText };
export default LocalizeIconText;
