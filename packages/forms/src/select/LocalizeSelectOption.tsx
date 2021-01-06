import React from 'react';
import styled from '@emotion/styled';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

export interface LocalizeSelectOptionProps extends OptionProps {
  label: string;
}

const LocalizeSelectOptionWrapper = styled.option<{}, LocalizeThemeProps>({
  width: '100%',
});

const LocalizeSelectOptionContainer = styled.div<{}, LocalizeThemeProps>({
  width: '100%',
});

const LocalizeSelectOption: React.FC<LocalizeSelectOptionProps> = ({ children, ...props }) => {
  return (
    <LocalizeSelectOptionWrapper {...props}>
      <LocalizeSelectOptionContainer>{children}</LocalizeSelectOptionContainer>
    </LocalizeSelectOptionWrapper>
  );
};

export { LocalizeSelectOption };
export default LocalizeSelectOption;
