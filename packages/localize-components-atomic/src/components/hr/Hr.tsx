import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  ThemesType,
  ThemeConfig,
} from '@seolhun/localize-components-styled-types';

export interface HrProps {
  // isNotRequired
  /**
   * Set this to change Button className
   */
  className?: string;
  /**
   * Set this to change Button mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
}

const StyledHr = styled.hr<HrProps>(({
  mainColor = ThemeConfig.MAIN_THEME,
}) => {
  return {
    border: 0,
    opacity: 0.1,
    borderTop: `1px solid ${mainColor}`,
  };
})

// tslint:disable-next-line:variable-name
const Hr: FC<HrProps> = ({
  className = '',
}) => (
  <StyledHr
    className={classnames(
      '__Localize__Button',
      className,
    )}
  />
);

export default Hr;
