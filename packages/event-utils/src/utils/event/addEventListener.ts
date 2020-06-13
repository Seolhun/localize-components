function addEventListener<K extends keyof WindowEventMap>(
  element: HTMLElement,
  eventName: K,
  fn: (...args: any[]) => void,
  useBubble = false,
) {
  element.addEventListener(eventName, fn, useBubble);
}

export { addEventListener };

export default addEventListener;
