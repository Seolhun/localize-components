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

const StyledLocalizeTag = styled.span<LocalizeTagProps, LocalizeThemeProps>(
  ({ theme, size = 'md', bgColor = 'primary', bdColor, borderRadius = '50%' }) => {
    const color = theme.colors.neutral1;
    const backgroundColor = theme.colors[bgColor];
    const borderColor = theme.colors[bdColor || bgColor];

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      color,
      backgroundColor,
      padding: getLocalizeSizeBy(size),
      border: `1px solid ${borderColor}`,
      borderRadius,

      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',

      '&:active, &:hover': {
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

const LocalizeTag: React.FC<LocalizeTagProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <StyledLocalizeTag {...props} className={classnames(CLASSNAME, className)}>
      {children}
    </StyledLocalizeTag>
  );
};

export { LocalizeTag };
export default LocalizeTag;
