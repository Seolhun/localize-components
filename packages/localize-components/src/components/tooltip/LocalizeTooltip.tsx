import React from 'react';
import styled from '@emotion/styled';

import { LocalizeIcon } from '@seolhun/localize-components-atomic';
import { useClientRect } from '@seolhun/localize-components-hooks';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import LocalizeTooltipPortal from './LocalizeTooltipPortal';

const ICON_DOM_SIZE = 18;

type LocalizeTooltipPlacementType =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = DivProps;
export interface LocalizeTooltipProps extends ExtentionProps {
  tooltip: React.ReactNode;

  /**
   * @default bottom-right
   */
  placement?: LocalizeTooltipPlacementType;

  /**
   * @default '0 0 0 6px'
   */
  margin?: string;
}

interface LocalizeTooltipWrapperProps {
  margin: string;
}

const LocalizeTooltipWrapper = styled.div<
  LocalizeTooltipWrapperProps,
  LocalizeThemeProps
>(({ margin }) => {
  return {
    display: 'inline-block',
    margin,
  };
});

const LocalizeTooltip: React.FC<LocalizeTooltipProps> = ({
  tooltip,
  placement = 'bottom-right',
  margin = '0 0 0 6px',
  onClick,
  ...props
}) => {
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const clientRect = useClientRect(tooltipRef);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('click', watchClickOutTooltip);
    return () => {
      document.removeEventListener('click', watchClickOutTooltip);
    };
  }, []);

  const watchClickOutTooltip = (e: MouseEvent) => {
    if (tooltipRef.current && e.target) {
      if (!tooltipRef.current.contains(e.target as any)) {
        setVisible(false);
      }
    }
  };

  const handleTogglerVisible = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const onClickTooltip = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(e);
      }
      handleTogglerVisible();
    },
    [visible],
  );

  return (
    <LocalizeTooltipWrapper {...props} ref={tooltipRef} margin={margin}>
      <LocalizeIcon
        icon={['fas', 'exclamation']}
        onClick={onClickTooltip}
        iconSize={`${ICON_DOM_SIZE}px`}
      />
      <LocalizeTooltipPortal
        visible={visible}
        tooltip={tooltip}
        placement={placement}
        clientRect={clientRect}
      />
    </LocalizeTooltipWrapper>
  );
};

export { LocalizeTooltip };
export default LocalizeTooltip;
