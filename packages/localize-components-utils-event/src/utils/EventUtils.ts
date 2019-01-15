
class EventUtils {
  static preventDefault(event: Event) {
    // Add Check Browser
    if (typeof event.preventDefault !== 'undefined') {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
  static addEvent<K extends keyof WindowEventMap>(
    element: HTMLElement,
    eventName: K,
    fn: (...args: any[]) => void,
    useBubble: boolean = false,
  ) {
    // Add Check Browser
    element.addEventListener(eventName, fn, useBubble);
  }

  static removeEvent<K extends keyof WindowEventMap>(
    element: HTMLElement,
    eventName: K,
    fn: (...args: any[]) => void,
  ) {
    // Add Check Browser
    element.removeEventListener(eventName, fn);
  }
}

export default EventUtils;
