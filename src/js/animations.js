function animation(showClass, hideClass) {
  const elements = document.querySelectorAll('.' + hideClass);

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

  elements.forEach((element) => observer.observe(element));
}

// Home Animation
// About Animation
// Project Animation
animation('animation-ltr-show', 'animation-ltr-hidden');

// Card Animation
const card = document.querySelectorAll('.card');
const hoverReveal = document.querySelectorAll('.card__image');

for (let index = 0; index < card.length; index++) {
  card[index].addEventListener('mousemove', (e) => {
    hoverReveal[index].style.opacity = 1;
    hoverReveal[index].style.transform = 'translate(-100%, -50%) rotate(5deg)';
    hoverReveal[index].style.left = e.clientX + 'px';
  });

  card[index].addEventListener('mouseleave', (e) => {
    hoverReveal[index].style.opacity = 0;
    hoverReveal[index].style.transform = 'translate(-200%, -50%) rotate(-5deg)';
  });
}