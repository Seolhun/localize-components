import React from 'react';

import styled from '@emotion/styled';

import {
  LocalizeThemeStyledProps,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import {
  getValidThemeObject,
  getThemeColorStyle,
} from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';

const DEFAULT_CLASSNAME = '__Localize__Box'

export interface LocalizeBoxProps extends LocalizeThemeStyledProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set this to change Box rendering children node
   * @default null
   */
  children: React.ReactNode;

  /**
   * Set this to change Box className
   * @default undefined
   */
  className?: string;

  /**
   * Set this to change Box css
   * @default {}
   */
  css?: {};
}

const StyledBoxWrapper = styled.div<LocalizeBoxProps, ILocalizeTheme>(({
  theme,
  ...props
}) => {
    const validTheme = getValidThemeObject(props, theme);
    return {
      backgroundColor: validTheme.mainColor,
      color: getThemeColorStyle(validTheme.mainColor),
      height: 'auto',
      width: '100%',
    };
  }
);

const StyledBoxContainer = styled.div<LocalizeBoxProps>({
  width: '100%',
  height: '100%',
})

export const LocalizeBox: React.FC<LocalizeBoxProps> = ({
  children,
  className,
  css = {},
  ...props
}) => {
  return (
    <StyledBoxWrapper
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
      css={css}
    >
      <StyledBoxContainer className={`${DEFAULT_CLASSNAME}__Container`}>
        {children}
      </StyledBoxContainer>
    </StyledBoxWrapper>
  );
};

export default LocalizeBox;
