import React, { FC, useMemo } from 'react';

import styled from '@emotion/styled';
import {
  LocalizeBaseStyledProps,
  ILocalizeTheme,
  DarkenThemeEnum,
} from '@seolhun/localize-components-styled-types';
import {
  getThemeHoverStyle
} from '@seolhun/localize-components-styled-utils';

import { LocalizeIconEnum, LocalizeIconType } from './LocalizeIconType';

export interface LocalizeIconProps extends LocalizeBaseStyledProps, LocalizeIconContainerProps {
  /**
   * Set this to change Icon
   */
  icon: keyof typeof LocalizeIconEnum;

  /**
   * Set this to change IconFile
   */
  iconFile?: string;

  /**
   * Set this to change Icon
   */
  iconType?: LocalizeIconType
}

export interface LocalizeIconContainerProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Icon BorderRadius
   * @default '3rem'
   */
  borderRadius?: string;

  /**
   * Set this to change Icon Height
   * @default 1.5rem
   */
  width?: string;

  /**
   * Set this to change Icon Height
   * @default 1.5rem
   */
  height?: string;
}

const StyledIconContainer = styled.div<
  LocalizeIconContainerProps,
  ILocalizeTheme
>(({
  width = '1.5rem',
  height = '1.5rem',
  borderRadius = '3rem',
}) => {
  return {
    display: 'inline-block',
    width,
    height,
    borderRadius,
    cursor: 'pointer',
  }
});

const StyledIcon = styled.div<LocalizeIconProps, ILocalizeTheme>(({
  iconFile,
  iconType,
  mainColor,
  width,
  height,
}) => {
  const iconColor = mainColor || DarkenThemeEnum.black;
  const getStyleByType = () => {
    if (iconType === 'png') {
      return {
        backgroundImage: `url(${iconFile})`,
      }
    }
    return {
      maskImage: `url(${iconFile})`,
      backgroundColor: iconColor,

      '&:hover': {
        backgroundColor: getThemeHoverStyle(iconColor),
      },
    }
  }
  return {
    ...getStyleByType(),
    backgroundRepeat: 'no-repeat',
    backgroundSize: !!width && !!height ? `${width} ${height}` : 'contain',
    width: '100%',
    height: '100%',

  }
});

export const LocalizeIcon: FC<LocalizeIconProps> = ({
  icon,
  width = '1.5rem',
  height = '1.5rem',
  iconType = 'svg',
  ...props
}) => {
  const memoizedIconFile = useMemo(() => {
    const iconFile = require(`./icons/${icon}.${iconType}`)
    return iconFile;
  }, [icon, iconType])

  return (
    <StyledIconContainer {...props} width={width} height={height}>
      <StyledIcon
        {...props}
        iconFile={memoizedIconFile}
        icon={icon}
        iconType={iconType}
        width={width}
        height={height}
      />
    </StyledIconContainer>
  )
}

export default LocalizeIcon;
