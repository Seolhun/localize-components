# Snippet

```tsx
import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  getLocalizeIntentColor,
  getLocalizeScaleBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeScale,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Something';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = LocalizeProps & DivProps;

export interface LocalizeSomethingProps extends ExtentionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: LocalizeScale;

  /**
   * Set this to change intent color
   * @default primary
   */
  intent?: LocalizeIntentThemeType;

  /**
   * Set this to change rounded border-radius
   */
  rounded?: boolean;
}

const LocalizeSomethingWrapper = styled.div<LocalizeProps, LocalizeThemeProps>(({
  theme,
  scale = 'md',
  intent = 'primary',
  localize = {
    primaryColor: 'primary',
    neutralColor: 'inversed9',
    fontColor: 'inversed1',
    inversedFontColor: 'inversed10',
  },
}) => {
  const localizedColor = getLocalizeIntentColor(theme, intent, localize);
  const { primaryColor, inversedFontColor } = localizedColor;
  const localizeScale = getLocalizeScaleBy(scale);

  return {
    backgroundColor: primaryColor,
    borderColor: neutralColor,
    color: fontColor,
  }
});

const LocalizeSomethingContainer = styled.div<LocalizeProps, LocalizeThemeProps>(() =>{
  return {}
})

const LocalizeSomething: React.FC<LocalizeSomethingProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <LocalizeSomethingWrapper
      {...props}
      className={classnames(CLASSNAME, className)}
    >
      <LocalizeSomethingContainer>
        {children}
      </LocalizeSomethingContainer>
    </LocalizeSomethingWrapper>
  );
};

export { LocalizeSomething };
export default LocalizeSomething;
```
