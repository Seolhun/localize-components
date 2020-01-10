import React from 'react';

import styled from '@emotion/styled';

export interface LocalizeImageProps extends LocalizeImageContainerProps {
  /**
   * Set this to change Image
   */
  src: string;

  /**
   * Set this to change Image alt
   */
  alt?: string;

  /**
   * Set this to change Image crossOrigint
   */
  crossOrigin?: 'anonymous' | 'use-credentials' | '';

  /**
   * Set this to change Image decoding
   */
  decoding?: 'async' | 'auto' | 'sync';

  /**
   * Set this to change Image Height
   * @default 'no-repeat'
   */
  backgroundRepeat?: string;

  /**
   * Set this to change Image backgroundSize
   * @default 'cover'
   */
  backgroundSize?: string

  /**
   * Set this to change Image backgroundSize
   * @default 'center'
   */
  backgroundPosition?: string

  /**
   * Set this to change Image Height
   * @default '2rem'
   */
  width?: string;

  /**
   * Set this to change Image Height
   * @default '2rem'
   */
  height?: string;
}

export interface LocalizeImageContainerProps {
  /**
   * Set this to change Image Height
   * @default '2rem'
   */
  width?: string;
  /**
   * Set this to change Image Height
   * @default '2rem'
   */
  height?: string;
}

const StyledImageContainer = styled.div<LocalizeImageContainerProps>(({
  width = '2rem',
  height = '2rem',
}) => {
  return {
    display: 'inline-block',
    width,
    height,
  }
});

const StyledImage = styled.img<LocalizeImageProps>(({
  src,
  backgroundRepeat = 'no-repeat',
  backgroundSize = 'cover',
  backgroundPosition = 'center',
}) => {
  return {
    backgroundImage: `url(${src})`,
    backgroundRepeat,
    backgroundSize,
    backgroundPosition,
    width: '100%',
    height: '100%',
  }
});

export const LocalizeImage: React.FC<LocalizeImageProps> = ({
  width = '2rem',
  height = '2rem',
  ...props
}) => {
  return (
    <StyledImageContainer width={width} height={height}>
      <StyledImage {...props} />
    </StyledImageContainer>
  )
}

export default LocalizeImage;
