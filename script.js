
const elements = document.querySelectorAll('.box')

function checkElements() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show'); 
    }
  });
}

window.addEventListener('scroll', checkElements);

checkElements();

