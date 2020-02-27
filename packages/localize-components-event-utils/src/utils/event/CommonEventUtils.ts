export function preventDefault(event) {
  const currentEvent = event || window.event;
  if (currentEvent.preventDefault) {
    currentEvent.preventDefault();
  }
  currentEvent.returnValue = false;
}

export function addEvent<K extends keyof WindowEventMap>(
  element: HTMLElement,
  eventName: K,
  fn: (...args: any[]) => void,
  useBubble = false,
) {
  element.addEventListener(eventName, fn, useBubble);
}

export function removeEvent<K extends keyof WindowEventMap>(
  element: HTMLElement,
  eventName: K,
  fn: (...args: any[]) => void,
) {
  element.removeEventListener(eventName, fn);
}
