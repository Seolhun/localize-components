import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__ErrorLabel';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface LocalizeFormLabelProps extends LocalizeProps, DivProps {
  /**
   * @default neutral12
   */
  color?: keyof LocalizeThemeProps['colors'];
}

const StyledErrorSpan = styled.span<LocalizeFormLabelProps, LocalizeThemeProps>(
  ({ theme, color = 'neutral12' }) => {
    const fonts = theme.fonts.font1;
    return {
      ...fonts,
      display: 'flex',
      alignItems: 'flex-start',
      color: theme.colors[color],
      marginTop: '12px',
    };
  },
);

const LocalizeFormLabel: React.FC<LocalizeFormLabelProps> = ({
  children,
  className,
  ...props
}) => (
  <StyledErrorSpan
    {...props}
    className={classnames(DEFAULT_CLASSNAME, className)}
  >
    {children}
  </StyledErrorSpan>
);

export { LocalizeFormLabel };
export default LocalizeFormLabel;
