import React from 'react';
import styled from '@emotion/styled';

import {
  LocalizeProps,
  LocalizeThemeProps,
  ThemeFontsProps,
} from '@seolhun/localize-components-styled-types';

type LocalizeTextType = keyof ThemeFontsProps;

interface LocalizeTextProps extends LocalizeProps {
  type: LocalizeTextType;

  weight?: number;

  isHighlight?: boolean;
}

const getStyleLocalizeText = (type: LocalizeTextType) => {
  return styled[type]<LocalizeTextProps, LocalizeThemeProps>(({ theme }) => {
    const fonts = theme.fonts[type];
    return {
      ...fonts,
    };
  });
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
    <StyleLocalizeText {...props} type={type}>
      {children}
    </StyleLocalizeText>
  );
};

export { LocalizeTextProps, LocalizeText };

export default LocalizeText;
