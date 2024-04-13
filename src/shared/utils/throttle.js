function throttle(func, delay = 1000) {
  let timer = null;

  return (...args) => {
    if (timer) {
      return;
    }
    func(...args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}

export default throttle;
