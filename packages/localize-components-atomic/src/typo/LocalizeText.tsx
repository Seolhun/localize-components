import React from 'react';
import styled from '@emotion/styled';

import {
  LocalizeBaseStyledProps,
  LocalizeThemeProps,
  ThemeFontsProps,
} from '@seolhun/localize-components-styled-types';

type LocalizeTextType = keyof ThemeFontsProps;

interface LocalizeTextProps extends LocalizeBaseStyledProps {
  type: LocalizeTextType;

  weight?: number;

  isHighlight?: boolean;
}

const getStyleLocalizeText = (type: LocalizeTextType) => {
  const defaultLocalizeTextStyle = {
    margin: 0,
    padding: 0,
  };

  return styled[type]<LocalizeTextProps, LocalizeThemeProps>(
    ({ theme, weight, isHighlight }) => {
      const fonts = theme.fonts[type];
      return {
        ...defaultLocalizeTextStyle,
        ...fonts,
        color: isHighlight
          ? theme.fontColors.highlightColor
          : theme.fontColors.primaryColor,
      };
    },
  );
};

const LocalizeText: React.FC<LocalizeTextProps> = ({
  type,
  children,
  ...props
}) => {
  const StyleLocalizeText = React.useMemo(() => {
    return getStyleLocalizeText(type);
  }, [type]);

  return (
    <StyleLocalizeText type={type} weight={weight} css={css} {...props}>
      {children}
    </StyleLocalizeText>
  );
};

export { LocalizeTextProps, LocalizeText };

export default LocalizeText;
