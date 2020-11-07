import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Hr';
type HRProps = React.HTMLAttributes<HTMLHRElement>;

export interface LocalizeHrProps extends LocalizeProps, HRProps {}

const StyledLocalizeHr = styled.hr<LocalizeHrProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      border: 0,
      opacity: 0.1,
      borderTop: `1px solid ${theme.colors.primary}`,
    };
  },
);

const LocalizeHr: React.FC<LocalizeHrProps> = ({ className = '' }) => (
  <StyledLocalizeHr className={classnames(CLASSNAME, className)} />
);

export { LocalizeHr };
export default LocalizeHr;
