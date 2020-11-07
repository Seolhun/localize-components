import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  AlignItemsProperty,
  FlexDirectionProperty,
  JustifyContentProperty,
} from 'csstype';
import { LocalizeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Flex';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface LocalizeFlexProps extends LocalizeProps, DivProps {
  justifyContent?: JustifyContentProperty;

  alignItems?: AlignItemsProperty;

  flexDirection?: FlexDirectionProperty;
}

const StyledLocalizeFlex = styled.div<LocalizeFlexProps>(
  ({ flexDirection, alignItems, justifyContent }) => {
    return {
      display: 'flex',
      flex: '1',
      flexDirection,
      alignItems,
      justifyContent,
    };
  },
);

const LocalizeFlex: React.FC<LocalizeFlexProps> = ({
  children,
  className,
  ...props
}) => (
  <StyledLocalizeFlex
    {...props}
    className={classnames(CLASSNAME, className)}
  >
    {children}
  </StyledLocalizeFlex>
);

export { LocalizeFlex };
export default LocalizeFlex;
