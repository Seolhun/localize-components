import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import {
  LocalizeThemeProps,
  localizeDarkTheme,
  localizeLightTheme,
} from '@seolhun/localize-components-styled-types';
import { useDarkMode } from 'storybook-dark-mode';

import styled from '@emotion/styled';

interface StoriesThemeWrapperProps {}

const Wrapper = styled.div<{}, LocalizeThemeProps>(({ theme }) => ({
  backgroundColor: theme.layout.backgroundColor,
  color: theme.layout.fontColor,
}));

const Container = styled.div<{}, LocalizeThemeProps>(() => ({
  marginTop: '25px',
  paddingBottom: '30px',
}));

const StoriesThemeWrapper: React.FC<StoriesThemeWrapperProps> = ({
  children,
}) => (
  <ThemeProvider theme={useDarkMode() ? localizeDarkTheme : localizeLightTheme}>
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  </ThemeProvider>
);

export { StoriesThemeWrapper };

export default StoriesThemeWrapper;
