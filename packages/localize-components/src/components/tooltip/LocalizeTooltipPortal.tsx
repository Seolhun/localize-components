import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import { LocalizeMediaQueries } from '@seolhun/localize-components-grid';
import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeTooltipProps } from './LocalizeTooltip';

const ICON_DOM_SIZE = 18;

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = LocalizeProps & DivProps;

export interface LocalizeTooltipPortalProps extends ExtentionProps {
  /**
   * Visible 여부
   */
  visible: boolean;

  /**
   * Tooltip content
   */
  tooltip: React.ReactNode;

  /**
   * @default bottom-right
   */
  placement?: LocalizeTooltipProps['placement'];

  /**
   * Tooltrip parent node clientRect
   */
  clientRect?: DOMRect;
}

interface LocalizeTooltipUIStateProps {
  placement: LocalizeTooltipProps['placement'];

  clientRect: DOMRect;
}

interface LocalizeTooltipHTMLProps {
  placement: LocalizeTooltipProps['placement'];

  clientRect: DOMRect;
}

const TooltipOverlayHTMLWrapper = styled.div<LocalizeTooltipUIStateProps, LocalizeThemeProps>(
  (props) => {
    return {
      position: 'absolute',
      zIndex: 100,
      ...getTooltipStyleByPlacement(props),
    };
  },
);

const TooltipOverlayHTML = styled.div<LocalizeTooltipHTMLProps, LocalizeThemeProps>(
  ({ theme, ...props }) => {
    return {
      padding: '16px',
      width: '300px',
      backgroundColor: theme.colors['black-65'],
      color: theme.colors.white,
      borderRadius: '4px',
      filter:
        'drop-shadow(0px 4px 4px rgba(51, 51, 51, 0.04)), drop-shadow(0px 4px 16px rgba(51, 51, 51, 0.08))',
      userSelect: 'none',

      '&::after': {
        ...getTooltipArrowStyleByPlacement(props, theme),
        content: '""',
        position: 'absolute',
        marginLeft: '-5px',
        borderWidth: '5px',
        borderStyle: 'solid',
      },

      '.Localize__Tooltip__Hightlight': {
        color: theme.colors.primary6,
      },

      [LocalizeMediaQueries.SM]: {
        width: '100%',
      },
      [LocalizeMediaQueries.XS]: {
        width: '100%',
      },
    };
  },
);

const getTooltipStyleByPlacement = ({ placement, clientRect }: LocalizeTooltipUIStateProps) => {
  switch (placement) {
    default: {
      return {
        top: `${clientRect.y + ICON_DOM_SIZE * 1.5}px`,
        right: 'auto',
        bottom: 'auto',
        left: `${clientRect.x - ICON_DOM_SIZE}px`,

        [LocalizeMediaQueries.SM]: {
          left: '16px',
          right: '16px',
        },
        [LocalizeMediaQueries.XS]: {
          left: '16px',
          right: '16px',
        },
      };
    }
  }
};

const getTooltipArrowStyleByPlacement = (
  { placement, clientRect }: LocalizeTooltipHTMLProps,
  theme: LocalizeThemeProps,
) => {
  switch (placement) {
    default: {
      const threshold = Math.ceil(ICON_DOM_SIZE / 2) - 1;
      return {
        top: '-10px',
        left: `${ICON_DOM_SIZE * 1.5}px`,
        borderColor: `transparent transparent ${theme.colors['black-65']}  transparent`,

        [LocalizeMediaQueries.SM]: {
          left: `${clientRect.x - threshold}px`,
        },
        [LocalizeMediaQueries.XS]: {
          left: `${clientRect.x - threshold}px`,
        },
      };
    }
  }
};

const LocalizeTooltipPortal: React.FC<LocalizeTooltipPortalProps> = ({
  visible,
  tooltip,
  placement = 'bottom-right',
  clientRect,
}) => {
  const memoizedTooltipHTML = React.useMemo(() => {
    if (!tooltip) {
      return '';
    }
    return tooltip.toString();
  }, [tooltip]);

  if (!visible || !clientRect) {
    return null;
  }

  return ReactDOM.createPortal(
    <TooltipOverlayHTMLWrapper placement={placement} clientRect={clientRect}>
      <TooltipOverlayHTML
        placement={placement}
        clientRect={clientRect}
        dangerouslySetInnerHTML={{ __html: memoizedTooltipHTML }}
      />
    </TooltipOverlayHTMLWrapper>,
    document.body,
  );
};

export { LocalizeTooltipPortal };
export default LocalizeTooltipPortal;
