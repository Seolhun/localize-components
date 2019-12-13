import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { LocalizeBaseStyledProps, ILocalizeTheme } from '@seolhun/localize-components-styled-types';
import { getValidThemeObject } from '@seolhun/localize-components-styled-utils';

type LocalizeTypoType = 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'big'
  | 'medium'
  | 'small';

interface LocalizeTypoProps extends LocalizeBaseStyledProps {
  type: LocalizeTypoType;
  children: ReactNode;
  weight?: number;
  isHighlight?: boolean;
}

const getStyleLocalizeTypo = (type: LocalizeTypoType) => {
  const defaultLocalizeTypoStyle = {
    margin: 0,
    padding: 0,
  }

  if (type === 'big' || type === 'medium' || type === 'small') {
    return styled.span<LocalizeTypoProps, ILocalizeTheme>(({ theme, weight, ...props }) => {
      const { secondaryFontColor } = getValidThemeObject(props, theme);
      theme.fonts.size
      return {
        ...defaultLocalizeTypoStyle,
        fontWeight: weight,
        fontSize: theme.fonts.size[type],
        color: secondaryFontColor,
      }
    });
  }

  return styled[type]<LocalizeTypoProps, ILocalizeTheme>(({ theme, weight, isHighlight, ...props }) => {
    const { highlightedFontColor, primaryFontColor } = getValidThemeObject(props, theme);
    return {
      ...defaultLocalizeTypoStyle,
      fontWeight: weight,
      fontSize: theme.fonts.size[type],
      color: isHighlight ? highlightedFontColor : primaryFontColor,
    }
  });
}

const LocalizeTypo: FC<LocalizeTypoProps> = ({
  type,
  children,
  weight = 400,
  css = {},
  ...props
}) => {

  const StyledType = getStyleLocalizeTypo(type);
  return (
    <StyledType type={type} weight={weight} css={css} {...props}>
      {children}
    </StyledType>
  )
}

export {
  LocalizeTypoProps,
  LocalizeTypo,
}

export default LocalizeTypo;
