import React from 'react';
import styled from '@emotion/styled';

import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';

import { Icons, IconTypes } from './resources';

const DEFAULT_CLASSNAME = '__Localize__Icon';

interface LocalizeIconProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Icon type
   */
  icon: keyof IconTypes;

  /**
   * Set this to change Icon color
   */
  color?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change Icon cursor type
   */
  cursor?: string;

  /**
   * Set this to change Icon width
   * @default 3rem
   */
  width?: string;

  /**
   * Set this to change Icon height
   * @default 3rem
   */
  height?: string;
}

const IconWrapper = styled.span<{
  width: string;
  height: string;
}>(({ width, height }) => {
  return {
    background: 'transparent',
    width,
    height,
  };
});

const LocalizeIcon: React.FC<LocalizeIconProps> = ({
  className,
  icon,
  color = 'uiColor08',
  cursor,
  width = '3rem',
  height = '3rem',
}) => {
  const RenderIcon = styled(Icons[icon])<{}, LocalizeThemeProps>(
    ({ theme }) => {
      return {
        fill: theme.colors[color],
        transition: 'fill 0.3s',
        cursor: `${cursor || 'pointer'}`,
      };
    },
  );

  return (
    <IconWrapper
      className={classnames(`${DEFAULT_CLASSNAME}__Wrapper`, className)}
      width={width}
      height={height}
    >
      <RenderIcon className={classnames(DEFAULT_CLASSNAME, className)} />
    </IconWrapper>
  );
};

export { LocalizeIcon, LocalizeIconProps };

export default LocalizeIcon;
