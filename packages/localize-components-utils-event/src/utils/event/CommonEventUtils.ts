function preventDefault(event) {
  const currentEvent = event || window.event;
  if (currentEvent.preventDefault) {
    currentEvent.preventDefault();
  }
  currentEvent.returnValue = false;
};

function addEvent<K extends keyof WindowEventMap>(
  element: HTMLElement,
  eventName: K,
  fn: (...args: any[]) => void,
  useBubble: boolean = false,
) {
  element.addEventListener(eventName, fn, useBubble);
}

function removeEvent<K extends keyof WindowEventMap>(
  element: HTMLElement,
  eventName: K,
  fn: (...args: any[]) => void,
) {
  element.removeEventListener(eventName, fn);
}

export {
  preventDefault,
  addEvent,
  removeEvent,
}

export default {
  preventDefault,
  addEvent,
  removeEvent,
};
