# Snippet

```tsx
import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  getLocalizeIntentColor,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Something';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = LocalizeProps & DivProps;

export interface LocalizeSomethingProps extends ExtentionProps {
  /**
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

const LocalizeSomethingWrapper = styled.div<LocalizeProps, LocalizeThemeProps>(({
  theme,
  localize = {
    primaryColor: 'primary',
    neutralColor: 'transparent',
    fontColor: 'inversed1',
  },
}) => {
  const localizedColor = getLocalizeIntentColor(theme, intent, localize);
  const { primaryColor, neutralColor, fontColor } = localizedColor;

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
