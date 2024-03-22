function animation(targetSelector, showClass, hideClass) {
  const element = document.querySelector(targetSelector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(showClass);
        entry.target.classList.remove(hideClass);
      } else {
        entry.target.classList.remove(showClass);
        entry.target.classList.add(hideClass);
      }
    });
  });

  observer.observe(element);
}

animation('.intro', 'intro--animation-show', 'intro--animation-hidden');
