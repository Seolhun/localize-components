import React, { Component, ReactNode } from 'react';

import styled from '@emotion/styled';

import { getBreakPoint } from './helpers';

export interface ColumnProps {
  children: ReactNode;

  className: string;
  styles: {};

  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;

  offsetXl: number;
  offsetLg: number;
  offsetMd: number;
  offsetSm: number;
  offsetXs: number;
}

const ColumnComponent = styled.div<ColumnProps>(({
  lg,
  md,
  sm,
  xs,
  offsetLg,
  offsetMd,
  offsetSm,
  offsetXs }) => {
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

class Column extends Component<ColumnProps> {
  render() {
    const {
      children = null,
      className = '',
      styles = {},
      xs = 12,
      sm = 12,
      md = 12,
      lg = 12,
      xl = 12,

      offsetXl = 0,
      offsetLg = 0,
      offsetMd = 0,
      offsetSm = 0,
      offsetXs = 0,
     } = this.props;

    return (
      <ColumnComponent
        {...this.props}
        className={className}
        css={styles}

        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        offsetXl={offsetXl}
        offsetLg={offsetLg}
        offsetMd={offsetMd}
        offsetSm={offsetSm}
        offsetXs={offsetXs}
      >
        {children}
      </ColumnComponent>
    );
  }
}

export default Column;
