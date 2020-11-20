/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

const DEFAULT_SIZE = 100;
const CLASSNAME = '__Localize__Image';
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
type Props = ImageProps;

export interface LocalizeImageProps extends Props {
  width?: string;

  height?: string;

  responsive?: boolean;

  backgroundPosition?: string;

  /**
   * @default cover
   */
  backgroundSize?: string;

  backgroundRepeat?: string;

  borderRadius?: string;
}

const LocalizeImageElement = styled.img<LocalizeImageProps>(
  ({
    borderRadius,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize = 'cover',
    width,
    height,
    responsive,
  }) => ({
    maxWidth: '100%',
    width: responsive && !width ? '100%' : width || `${DEFAULT_SIZE}px`,
    height: responsive && !height ? '100%' : height || `${DEFAULT_SIZE}px`,
    backgroundPosition: backgroundPosition || '50% 50%',
    backgroundRepeat: backgroundRepeat || 'no-repeat',
    userSelect: 'none',
    backgroundSize,
    borderRadius,
  }),
);

const LocalizeImage: React.FC<LocalizeImageProps> = ({ className, ...props }) => {
  return <LocalizeImageElement {...props} className={classnames(CLASSNAME, className)} />;
};

export { LocalizeImage };
export default LocalizeImage;
