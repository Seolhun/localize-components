import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { WidthProperty } from 'csstype';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Text';
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type LocalizeTextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface LocalizeTextProps extends LocalizeProps, HeadingProps {
  type: LocalizeTextType;

  color?: keyof LocalizeThemeProps['colors'];

  weight?: WidthProperty<string>;
}

const getStyleLocalizeText = (type: LocalizeTextType) => {
  return styled[type]<LocalizeTextProps, LocalizeThemeProps>(({ theme, color }) => {
    const fonts = theme.fonts[type];
    return {
      ...fonts,
      color: color ? theme.colors[color] : 'inherit',
    };
  });
};

const LocalizeText: React.FC<LocalizeTextProps> = ({ type, children, className, ...props }) => {
  const StyleLocalizeText = React.useMemo(() => {
    return getStyleLocalizeText(type);
  }, [type]);

  return (
    <StyleLocalizeText {...props} type={type} className={classnames(DEFAULT_CLASSNAME, className)}>
      {children}
    </StyleLocalizeText>
  );
};

export { LocalizeText };
export default LocalizeText;
