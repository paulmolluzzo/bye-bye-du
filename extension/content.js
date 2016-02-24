'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const scripts = document.getElementsByTagName('script');
  const pattern = new RegExp('baidu|bdstatic');
  let count = 0;

  Array.from(scripts).forEach((current) => {
    const parent = current.parentNode;

    if (pattern.test(current.src) || pattern.test(current.innerHTML)) {
      count++;
      parent.removeChild(current);
    }
  });

  console.log('%cBye Bye Du removed ' + count + ' scripts.', 'color: #ffa500;');
});
