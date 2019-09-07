import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeThemesType,
  LocalizeTheme,
} from '@seolhun/localize-components-styled-types';

export interface HrProps {
  // isNotRequired
  /**
   * Set this to change Button className
   */
  className?: string;
  /**
   * Set this to change Button mainColor
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
}

const StyledHr = styled.hr<HrProps>(
  ({ mainColor = LocalizeTheme.primaryColor }) => {
    return {
      border: 0,
      opacity: 0.1,
      borderTop: `1px solid ${mainColor}`,
    };
  }
);

// tslint:disable-next-line:variable-name
const Hr: FC<HrProps> = ({ className = '' }) => (
  <StyledHr className={classnames('__Localize__Button', className)} />
);

export default Hr;
