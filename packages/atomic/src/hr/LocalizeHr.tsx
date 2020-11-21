import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { getLocalizeColor, LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Hr';
type HrProps = React.HTMLAttributes<HTMLHRElement>;
type Props = LocalizeProps & HrProps;

export interface LocalizeHrProps extends Props {}

const LocalizeStyledHr = styled.hr<LocalizeHrProps, LocalizeThemeProps>(
  ({ theme,
    localize = {
      bgColor: 'transparent',
      bdColor: 'neutral4',
      fontColor: 'transparent',
    },
  }) => {
    const { borderColor } = getLocalizeColor(theme, localize);
    return {
      width: '100%',
      border: 0,
      borderTop: `1px solid ${borderColor}`,
    };
  },
);

const LocalizeHr: React.FC<LocalizeHrProps> = ({ color, className, ...props }) => {
  return <LocalizeStyledHr {...props} color={color} className={classnames(CLASSNAME, className)} />;
};

export { LocalizeHr };
export default LocalizeHr;
