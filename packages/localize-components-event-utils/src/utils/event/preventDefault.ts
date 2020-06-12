function preventDefault(event: Event) {
  const currentEvent = event || window.event;
  if (currentEvent.preventDefault) {
    currentEvent.preventDefault();
  }
  currentEvent.returnValue = false;
}

export { preventDefault };

export default preventDefault;
