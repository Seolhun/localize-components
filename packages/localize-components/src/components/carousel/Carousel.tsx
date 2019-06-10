import React, { Component, createRef, RefObject } from 'react';

import { debounce } from 'lodash';
import styled from '@emotion/styled';

import {
  getClientWindowSize
} from '@seolhun/localize-components-utils-event';

const PAGINATION = {
  PREV: 'prev',
  NEXT: 'next',
};

const DEFAULT_RATIO = 0.5;

const CarouselWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: '100%',
});

const CarouselImageContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  height: 'auto',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
});

const CarouselContainer = styled.div({
  display: 'block',
  height: 'auto',
  position: 'relative',
  transition: 'transform 0.5s linear',
  width: '100%',
});

export interface CarouselProps {
  items: any[],
  children: (item: any, index: number) => any,

  displayedImageCount?: number,
  imageGap?: number,
  styles?: {},
  zIndex?: number,
}

export interface CarouselState {
  clientWidth: number,
  pageIndex: number,
}

class Carousel extends Component<CarouselProps, CarouselState> {
  private wrapperRef: RefObject<HTMLDivElement>;
  private debouncedHandleImageWidth: (...agrs: any[]) => any;

  constructor(props) {
    super(props);
    this.state = {
      clientWidth: 0,
      pageIndex: 0,
    };
    this.wrapperRef = createRef();
    this.debouncedHandleImageWidth = debounce(() => {
      this.handleImageWidth();
    }, 250, { leading: true, trailing: true });
  }

  componentDidMount() {
    this.handleImageWidth();
    window.addEventListener('resize', this.debouncedHandleImageWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleImageWidth);
  }

  handleImageWidth = () => {
    const { clientWidth } = getClientWindowSize(this.wrapperRef.current);
    this.setState({
      clientWidth,
    });
  };

  handlePageIndex = (itemsCounts, displayedImageCount, name) => {
    const { pageIndex } = this.state;

    let newPageIndex = pageIndex;
    if (name === PAGINATION.PREV) {
      const nextPageIndex = pageIndex - displayedImageCount;
      newPageIndex = nextPageIndex < 0 ? 0 : nextPageIndex;
    } else if (name === PAGINATION.NEXT) {
      const nextPageIndex = pageIndex + displayedImageCount;
      newPageIndex = nextPageIndex > itemsCounts ? pageIndex : nextPageIndex;
    }
    this.setState({
      pageIndex: newPageIndex,
    });
  };

  getImageMaxWidthByClient = (displayedImageCount) => {
    const { items } = this.props;
    const { clientWidth } = this.state;

    const sliceLength = items.length > displayedImageCount ? displayedImageCount + DEFAULT_RATIO : items.length;
    const imageWidth = clientWidth / sliceLength;
    return imageWidth;
  };

  render() {
    const {
      items,
      children,

      displayedImageCount = 3,
      imageGap = 30,
      styles = {},
      zIndex = 100,
    } = this.props;

    const {
      pageIndex,
    } = this.state;

    const imageWidth = this.getImageMaxWidthByClient(displayedImageCount);

    return (
      <CarouselWrapper
        css={{
          zIndex,
        }}
      >
        <CarouselImageContainer
          ref={this.wrapperRef}
          css={styles}
        >
          {items.map((item, idx) => (
            <CarouselContainer
              key={`carousel-image-${idx}`}
              css={{
                flex: `0 0 ${100 / displayedImageCount}%`,
                maxWidth: `${imageWidth}px`,
                paddingRight: `${imageGap}px`,
                transform: `matrix(1, 0, 0, 1, -${imageWidth * pageIndex}, 0)`,
              }}
            >
              {children(item, idx)}
            </CarouselContainer>
          ))}
        </CarouselImageContainer>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
