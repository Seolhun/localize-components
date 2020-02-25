import React from 'react';
import styled from '@emotion/styled';

import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

interface ImageProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Image image Url
   */
  src: string;
  /**
   * Set this to change Image image Alt
   */
  alt?: string;
  /**
   * Set this to change Image width
   */
  width?: string;
  /**
   * Set this to change Image Height
   */
  height?: string;
  /**
   * Set this to change Image height
   */
  borderRadius?: string;
}

const StyledImage = styled.img<ImageProps>(
  ({ width, height, borderRadius }) => {
    return {
      width: width || '100%',
      height: height || '100%',
      borderRadius: borderRadius || '5px',
    };
  },
);

const Image: React.FC<ImageProps> = (props) => {
  return <StyledImage {...props} />;
};

export { ImageProps, Image };

export default Image;
