export function getTouchData(event) {
  const touchEventObj = event.changedTouches[0];
  const { pageX, pageY } = touchEventObj;
  return {
    pageX,
    pageY,
  };
}

const touchThreshold = 75;
export function getTouchDirection(
  { startX, endX, startY, endY },
  { threshold = touchThreshold } = {
    threshold: touchThreshold,
  },
) {
  let directionX = 'none';
  if (startX && endX) {
    const diff = endX - startX;
    const isLeftSwipe = diff > threshold;
    const isRightSwipe = diff < parseInt(`-${threshold}`, 10);
    directionX = isRightSwipe ? 'right' : isLeftSwipe ? 'left' : 'none';
  }

  let directionY = 'none';
  if (startY && endY) {
    const diff = endY - startY;
    const isBelowSwipe = diff > threshold;
    const isOverSwipe = diff < parseInt(`-${threshold}`, 10);
    directionY = isOverSwipe ? 'over' : isBelowSwipe ? 'below' : 'none';
  }

  return {
    directionX,
    directionY,
  };
}
