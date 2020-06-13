function removeEventListener<K extends keyof WindowEventMap>(
  element: HTMLElement,
  eventName: K,
  fn: (...args: any[]) => void,
) {
  element.removeEventListener(eventName, fn);
}

export { removeEventListener };

export default removeEventListener;
