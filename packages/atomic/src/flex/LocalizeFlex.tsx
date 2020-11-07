import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { AlignItemsProperty, FlexDirectionProperty, JustifyContentProperty } from 'csstype';
import { LocalizeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Flex';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type Props = LocalizeProps & DivProps;

export interface LocalizeFlexProps extends Props {
  alignItems?: AlignItemsProperty;

  justifyContent?: JustifyContentProperty;

  flexDirection?: FlexDirectionProperty;
}

const StyledLocalizeFlex = styled.div<LocalizeFlexProps>(({ flexDirection, alignItems, justifyContent }) => {
  return {
    display: 'flex',
    flex: '1',
    alignItems,
    justifyContent,
    flexDirection,
  };
});

const LocalizeFlex: React.FC<LocalizeFlexProps> = ({ children, className, ...props }) => (
  <StyledLocalizeFlex {...props} className={classnames(CLASSNAME, className)}>
    {children}
  </StyledLocalizeFlex>
);

export { LocalizeFlex };
export default LocalizeFlex;
