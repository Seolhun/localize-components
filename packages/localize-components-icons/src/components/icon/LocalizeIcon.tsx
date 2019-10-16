import React, { FC, useMemo } from 'react';

import styled from '@emotion/styled';
import {
  LocalizeBaseStyledProps,
  ILocalizeTheme,
  DarkenThemeEnum,
} from '@seolhun/localize-components-styled-types';

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
   * @default 2rem
   */
  width?: string;

  /**
   * Set this to change Icon Height
   * @default 2rem
   */
  height?: string;
}

const StyledIconContainer = styled.div<
  LocalizeIconContainerProps,
  ILocalizeTheme
>(({
  width = '2rem',
  height = '2rem',
  borderRadius = '3rem',
}) => {
  return {
    display: 'inline-block',
    width,
    height,
    borderRadius,
  }
});

const StyledIcon = styled.div<LocalizeIconProps, ILocalizeTheme>(({
  iconFile,
  mainColor,
}) => {
  return {
    backgroundImage: `url(${iconFile})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    fill: mainColor || DarkenThemeEnum.black,
    width: '100%',
    height: '100%',
  }
});

export const LocalizeIcon: FC<LocalizeIconProps> = ({
  icon,
  iconType = 'svg',
  ...props
}) => {
  const iconFile = useMemo(() => {
    const iconFile = require(`./icons/${icon}.${iconType}`)
    return iconFile;
  }, [icon, iconType])

  return (
    <StyledIconContainer {...props}>
      <StyledIcon {...props} icon={icon} iconFile={iconFile}/>
    </StyledIconContainer>
  )
}

export default LocalizeIcon;
