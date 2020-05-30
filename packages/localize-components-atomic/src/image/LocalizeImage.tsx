import React from 'react';
import styled from '@emotion/styled';

import { LocalizeProps } from '@seolhun/localize-components-styled-types';

export interface LocalizeImageProps
  extends React.HTMLAttributes<HTMLImageElement>,
    LocalizeProps {
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
  isRounded?: boolean;
}

const StyledImage = styled.img<LocalizeImageProps>(
  ({ width, height, isRounded }) => {
    return {
      width: width || '100%',
      height: height || '100%',
      isRounded: isRounded ? '5px' : undefined,
    };
  },
);

export const LocalizeImage: React.FC<LocalizeImageProps> = (props) => {
  return <StyledImage {...props} />;
};

export default LocalizeImage;
