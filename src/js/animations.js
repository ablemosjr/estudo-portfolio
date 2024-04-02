const backToTopButton = document.querySelector('#backToTop');

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

// Animation
animation('animation-ltr-show', 'animation-ltr-hidden');

// Card hover Animation
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

// Back to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    backToTopButton.classList.add('backToTop--show');
  } else {
    backToTopButton.classList.remove('backToTop--show');
  }
});

backToTopButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});