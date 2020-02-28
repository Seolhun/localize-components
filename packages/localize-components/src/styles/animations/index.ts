import { keyframes } from '@emotion/core';

export const fadeIn = () => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = () => keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const fadeDown = (from = '-70%', to = '0') => keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, ${from}, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, ${to}, 0);
  }
`;

export const fadeUp = (from = '70%', to = '0') => keyframes`
  {
    from {
      opacity: 0;
      transform: translate3d(0, ${from}, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, ${to}, 0);
    }
  }
`;

export const moveUp = (from = '-70%', to = '0') => keyframes`
  from {
    transform: translate3d(0, ${from}, 0);
  }

  to {
    transform: translate3d(0, ${to}, 0);
  }
`;

export const moveDown = (from = '70%', to = '0') => keyframes`
  {
    from {
      transform: translate3d(0, ${from}, 0);
    }

    to {
      transform: translate3d(0, ${to}, 0);
    }
  }
`;
