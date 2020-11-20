import React from 'react';
import styled from '@emotion/styled';
import { Property } from 'csstype';
import classnames from 'classnames';

import { LocalizeMediaQueries } from './LocalizeGrid.Helpers';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
export interface LocalizeRowProps extends DivProps {
  noWrap?: boolean;

  flexDirection?: Property.FlexDirection;

  /**
   * @default -8
   */
  margin?: number;
}

const LocalizeRowWrapper = styled.div<LocalizeRowProps>(() => {
  return {
    [LocalizeMediaQueries.MD]: {
      padding: '0 16px',

      '&.LocalizeRow .LocalizeRow': {
        padding: '0 8px',
      },
    },
    [LocalizeMediaQueries.SM]: {
      padding: '0 16px',

      '&.LocalizeRow .LocalizeRow': {
        padding: '0 8px',
      },
    },
    [LocalizeMediaQueries.XS]: {
      padding: '0 16px',

      '&.LocalizeRow .LocalizeRow': {
        padding: '0 8px',
      },
    },
  };
});

const LocalizeRowContainer = styled.div<LocalizeRowProps>(
  ({ noWrap, flexDirection = 'row', margin = -8 }) => ({
    display: 'flex',
    width: 'auto',
    flexDirection,
    flexWrap: noWrap ? 'unset' : 'wrap',
    overflow: noWrap ? 'auto' : 'hidden',
    margin: `0 ${margin}px`,

    // TODO: 한 Row 안에 여러 Colums가 렌더링 될 경우 paddingLeft 개선필요
    [LocalizeMediaQueries.XL]: {
      margin: '0 -8px',

      '& > div[class*="col-xl-"]': {
        padding: '0 8px',
      },
    },
    [LocalizeMediaQueries.LG]: {
      margin: '0 -8px',

      '& > div[class*="col-lg-"]': {
        padding: '0 8px',
      },
    },
    [LocalizeMediaQueries.MD]: {
      margin: '0 -16px',

      '& > div[class*="col-md-"]': {
        padding: '0 8px',
      },
    },
    [LocalizeMediaQueries.SM]: {
      margin: '0 -16px',

      '& > div[class*="col-sm-"]': {
        padding: '0 8px',
      },
    },
    [LocalizeMediaQueries.XS]: {
      margin: '0 -16px',

      '& > div[class*="col-xs-"]': {
        padding: '0 8px',
      },
    },
  }),
);

const LocalizeRow: React.FC<LocalizeRowProps> = ({ children, className, ...props }) => {
  return (
    <LocalizeRowWrapper {...props} className={classnames(className, 'LocalizeRow')}>
      <LocalizeRowContainer>{children}</LocalizeRowContainer>
    </LocalizeRowWrapper>
  );
};

export { LocalizeRow };
export default LocalizeRow;
