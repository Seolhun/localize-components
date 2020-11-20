import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { lighten } from 'polished';

import {
  LocalizeThemeProps,
  LocalizeProps,
  LocalizeSize,
  getLocalizeSizeBy,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Tag';
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;
type ExtentionProps = LocalizeProps & SpanProps;

export interface LocalizeTagProps extends ExtentionProps {
  size?: LocalizeSize;

  /**
   * Set this to change border radius
   * @default undefined
   */
  borderRadius?: string;
}

const StyledLocalizeTagWrapper = styled.div<LocalizeTagProps, LocalizeThemeProps>(
  ({ theme, bgColor = 'primary', bdColor, borderRadius = '24px' }) => {
    const color = theme.colors.neutral1;
    const backgroundColor = theme.colors[bgColor];
    const borderColor = theme.colors[bdColor || bgColor];

    return {
      position: 'relative',
      display: 'inline-block',
      color,
      backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius,

      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        backgroundColor: lighten(0.1, backgroundColor),
        borderColor: lighten(0.1, borderColor),
      },
      '&:disabled': {
        backgroundColor: theme.colors.neutral4,
        borderColor: theme.colors.neutral5,
        color: theme.colors.neutral8,
        cursor: 'not-allowed',
      },
    };
  },
);

const StyledLocalizeTagContainer = styled.span<LocalizeTagProps, LocalizeThemeProps>(({ size }) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getLocalizeSizeBy(size),
  };
});

const LocalizeTag: React.FC<LocalizeTagProps> = ({ children, className, size, ...props }) => {
  return (
    <StyledLocalizeTagWrapper {...props} className={classnames(CLASSNAME, className)}>
      <StyledLocalizeTagContainer size={size}>{children}</StyledLocalizeTagContainer>
    </StyledLocalizeTagWrapper>
  );
};

export { LocalizeTag };
export default LocalizeTag;
