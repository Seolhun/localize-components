import React, { Component, ReactNode } from 'react';

import styled from '@emotion/styled';

import breakpoint from './helpers/breakpoint';
import layout from './helpers/layout';

export interface GridProps {
  isFluid: boolean,
}

const GridContainerComponent = styled.div<GridProps>({
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '100%',
  paddingLeft: 'auto',
  paddingRight: 'auto',
},
({ isFluid }) => {
  if (!isFluid) {
    return {
      maxWidth: `${layout.BREAK_POINT.lg.maxWidth}px`,
      [breakpoint.MD]: {
        maxWidth: `${layout.BREAK_POINT.md.maxWidth}px`,
      },
      [breakpoint.SM]: {
        maxWidth: `${layout.BREAK_POINT.sm.maxWidth}px`,
      },
      [breakpoint.XS]: {
        maxWidth: `${layout.BREAK_POINT.xs.maxWidth}px`,
      },
    };
  }
  return null;
})

export interface GridContainerProps {
  children: ReactNode,
  className: string,
  isFluid: boolean,
  styles: {},
}

class GridContainer extends Component<GridContainerProps> {
  render() {
    const {
      children = null,
      className = '',
      isFluid = false,
      styles = {},
    } = this.props;

    return (
      <GridContainerComponent
        className={className}
        isFluid={isFluid}
        css={styles}
      >
        {children}
      </GridContainerComponent>
    );
  }
}

export default GridContainer;
