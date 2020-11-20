# Snippet

```tsx
import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Something';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = LocalizeProps & DivProps;

export interface LocalizeSomethingProps extends ExtentionProps {}

const LocalizeSomethingWrapper = styled.div<{}, LocalizeThemeProps>(() => {
  return {}
})

const LocalizeSomethingContainer = styled.div<{}, LocalizeThemeProps>(() => {
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
