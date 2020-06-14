import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeThemeProps,
  LocalizeStyleProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Hr';
type HRProps = React.HTMLAttributes<HTMLHRElement>;

export interface LocalizeHrProps extends LocalizeStyleProps, HRProps {}

const StyledLocalizeHr = styled.hr<LocalizeHrProps, LocalizeThemeProps>(
  ({ theme, primaryColor }) => {
    const mainColor = theme.colors[primaryColor || 'primary01'];
    return {
      border: 0,
      borderTop: `1px solid ${mainColor}`,
    };
  },
);

export const LocalizeHr: React.FC<LocalizeHrProps> = ({ className = '' }) => (
  <StyledLocalizeHr className={classnames(DEFAULT_CLASSNAME, className)} />
);

export default LocalizeHr;
