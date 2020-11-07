import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';

type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

export interface GOCSelectOptionProps extends OptionProps {
  label: string;
}

const GOCSelectOptionWrapper = styled.option<{}, GOCThemeProps>({
  width: '100%',
});

const GOCSelectOptionContainer = styled.div<{}, GOCThemeProps>({
  width: '100%',
});

const GOCSelectOption: React.FC<GOCSelectOptionProps> = ({ children, ...props }) => {
  return (
    <GOCSelectOptionWrapper {...props}>
      <GOCSelectOptionContainer>{children}</GOCSelectOptionContainer>
    </GOCSelectOptionWrapper>
  );
};

export { GOCSelectOption };
export default GOCSelectOption;
