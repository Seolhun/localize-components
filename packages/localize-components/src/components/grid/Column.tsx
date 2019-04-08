import React, { Component, ReactNode } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getBreakPoint } from './helpers';

const ColumnComponent = styled.div(({ lg, md, sm, xs, offsetLg, offsetMd, offsetSm, offsetXs }) => {
  const gridStyle = getBreakPoint(
    { lg, md, sm, xs },
    {
      offsetLg,
      offsetMd,
      offsetSm,
      offsetXs,
    },
  );
  return {
    position: 'relative',
    ...gridStyle,
  };
});

export interface ColumnProps {
  children: ReactNode;

  className: string;
  styles: {};

  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

class Column extends Component<ColumnProps> {
  render() {
    const {
      children = null,
      className = '',
      styles = {},
     } = this.props;

    return (
      <ColumnComponent {...this.props} className={className} css={styles}>
        {children}
      </ColumnComponent>
    );
  }
}

export default Column;
