window.onload = function () {
  document.body.classList.add('loaded');
  setTimeout(() => {
    Draggable.create('.gallery', {
      bounds: 'body',
      inertia: true,
    });
  }, 200);
};
