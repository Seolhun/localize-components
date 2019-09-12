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
}

const getStyleTypo = (type: TypoType) => {
  const defaultTypoStyle = {
    margin: 0,
    padding: 0,
  }

  if (type === 'big' || type === 'medium' || type === 'small') {
    return styled.span<TypoProps, ILocalizeTheme>(({ theme, ...props }) => {
      const { secondaryFontColor } = getValidThemeObject(props, theme);
      theme.fonts.SIZE
      return {
        ...defaultTypoStyle,
        fontSize: theme.fonts.SIZE[type],
        color: secondaryFontColor,
      }
    });
  }

  if (type === 'h1' || type === 'h2' || type === 'h3') {
    return styled.span<TypoProps, ILocalizeTheme>(({ theme, ...props }) => {
      const { highlightedFontColor } = getValidThemeObject(props, theme);
      return {
        ...defaultTypoStyle,
        fontSize: theme.fonts.SIZE[type],
        color: highlightedFontColor,
      }
    });
  }

  return styled[type]<TypoProps, ILocalizeTheme>(({ theme, ...props }) => {
    const { primaryFontColor } = getValidThemeObject(props, theme);
    return {
      ...defaultTypoStyle,
      fontSize: theme.fonts.SIZE[type],
      color: primaryFontColor,
    }
  });
}

const Typo: FC<TypoProps> = ({
  type,
  children,
  css = {},
  ...props
}) => {

  const StyledType = getStyleTypo(type);
  return (
    <StyledType type={type} css={css} {...props}>
      {children}
    </StyledType>
  )
}

export {
  TypoProps,
  Typo,
}

export default Typo;
