import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Hr';

export interface LocalizeHrProps extends LocalizeProps {}

const StyledLocalizeHr = styled.hr<LocalizeHrProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      border: 0,
      opacity: 0.1,
      borderTop: `1px solid ${theme.colors.primary01}`,
    };
  },
);

export const LocalizeHr: React.FC<LocalizeHrProps> = ({ className = '' }) => (
  <StyledLocalizeHr className={classnames(DEFAULT_CLASSNAME, className)} />
);

export default LocalizeHr;
