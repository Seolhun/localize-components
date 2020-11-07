import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Hr';
type HrProps = React.HTMLAttributes<HTMLHRElement>;

export interface LocalizeHrProps extends HrProps {
  /**
   * @default neutral4
   */
  color?: keyof LocalizeThemeProps['colors'];
}

const GOCStyledHr = styled.hr<LocalizeHrProps, LocalizeThemeProps>(({ theme, color = 'neutral4' }) => {
  return {
    width: '100%',
    border: 0,
    borderTop: `1px solid ${theme.colors[color]}`,
  };
});

const LocalizeHr: React.FC<LocalizeHrProps> = ({ color, className, ...props }) => {
  return <GOCStyledHr {...props} color={color} className={classnames(CLASSNAME, className)} />;
};

export { LocalizeHr };
export default LocalizeHr;
