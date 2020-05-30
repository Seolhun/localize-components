const TOUCH_THRESHOLD = 75;

function getTouchData(event: TouchEvent) {
  const touchEventObj = event.changedTouches[0];
  const { screenX, screenY } = touchEventObj;
  return {
    screenX,
    screenY,
  };
}

type TourchDirectionXType = 'none' | 'right' | 'left';
type TourchDirectionYType = 'none' | 'over' | 'below';
type GetTouchDirection = (
  args: any,
  args2: any,
) => {
  directionX: TourchDirectionXType;
  directionY: TourchDirectionYType;
};

const getTouchDirection: GetTouchDirection = (
  { startX, endX, startY, endY },
  { threshold = TOUCH_THRESHOLD } = {
    threshold: TOUCH_THRESHOLD,
  },
) => {
  let directionX: TourchDirectionXType = 'none';
  if (startX && endX) {
    const diff = endX - startX;
    const isLeftSwipe = diff > threshold;
    const isRightSwipe = diff < Number.parseInt(`-${threshold}`, 10);
    directionX = isRightSwipe ? 'right' : isLeftSwipe ? 'left' : 'none';
  }

  let directionY: TourchDirectionYType = 'none';
  if (startY && endY) {
    const diff = endY - startY;
    const isBelowSwipe = diff > threshold;
    const isOverSwipe = diff < Number.parseInt(`-${threshold}`, 10);
    directionY = isOverSwipe ? 'over' : isBelowSwipe ? 'below' : 'none';
  }

  return {
    directionX,
    directionY,
  };
};

export { getTouchData, getTouchDirection };

export default getTouchDirection;
