import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeThemeStyledProps,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Hr';

export interface HrProps extends LocalizeThemeStyledProps {
  // isNotRequired
  /**
   * Set this to change Button className
   */
  className?: string;
}

const StyledHr = styled.hr<HrProps, ILocalizeTheme>(({
  mainColor,
  subColor,
  theme,
}) => {
    const validTheme = getThemeObject({ mainColor, subColor }, theme);

    return {
      border: 0,
      opacity: 0.1,
      borderTop: `1px solid ${validTheme.mainColor}`,
    };
  }
);

// tslint:disable-next-line:variable-name
export const Hr: FC<HrProps> = ({ className = '' }) => (
  <StyledHr className={classnames(DEFAULT_CLASSNAME, className)} />
);

export default Hr;
