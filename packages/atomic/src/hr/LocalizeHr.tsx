import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Hr';
type HrProps = React.HTMLAttributes<HTMLHRElement>;
type Props = LocalizeProps & HrProps;

export interface LocalizeHrProps extends Props {
  /**
   * @default neutral4
   */
  borderColor?: Props['bgColor'];
}

const GOCStyledHr = styled.hr<LocalizeHrProps, LocalizeThemeProps>(
  ({ theme, borderColor = 'neutral4' }) => {
    return {
      width: '100%',
      border: 0,
      borderTop: `1px solid ${theme.colors[borderColor]}`,
    };
  },
);

const LocalizeHr: React.FC<LocalizeHrProps> = ({ color, className, ...props }) => {
  return <GOCStyledHr {...props} color={color} className={classnames(CLASSNAME, className)} />;
};

export { LocalizeHr };
export default LocalizeHr;
