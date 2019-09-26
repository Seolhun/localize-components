import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { LocalizeBaseStyledProps, ILocalizeTheme } from '@seolhun/localize-components-styled-types';
import { getValidThemeObject } from '@seolhun/localize-components-styled-utils';

type TypoType = 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'big'
  | 'medium'
  | 'small';

interface TypoProps extends LocalizeBaseStyledProps {
  type: TypoType;
  children: ReactNode;
  weight?: number;
  isHighlight?: boolean;
}

const getStyleTypo = (type: TypoType) => {
  const defaultTypoStyle = {
    margin: 0,
    padding: 0,
  }

  if (type === 'big' || type === 'medium' || type === 'small') {
    return styled.span<TypoProps, ILocalizeTheme>(({ theme, weight, ...props }) => {
      const { secondaryFontColor } = getValidThemeObject(props, theme);
      theme.fonts.SIZE
      return {
        ...defaultTypoStyle,
        fontWeight: weight,
        fontSize: theme.fonts.SIZE[type],
        color: secondaryFontColor,
      }
    });
  }

  return styled[type]<TypoProps, ILocalizeTheme>(({ theme, weight, isHighlight, ...props }) => {
    const { highlightedFontColor, primaryFontColor } = getValidThemeObject(props, theme);
    return {
      ...defaultTypoStyle,
      fontWeight: weight,
      fontSize: theme.fonts.SIZE[type],
      color: isHighlight ? highlightedFontColor : primaryFontColor,
    }
  });
}

const Typo: FC<TypoProps> = ({
  type,
  children,
  weight = 400,
  css = {},
  ...props
}) => {

  const StyledType = getStyleTypo(type);
  return (
    <StyledType type={type} weight={weight} css={css} {...props}>
      {children}
    </StyledType>
  )
}

export {
  TypoProps,
  Typo,
}

export default Typo;
