const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Get actual card width dynamically (more reliable)
const getScrollAmount = () => {
  const card = document.querySelector('.card');
  const style = getComputedStyle(carousel);
  const gap = parseInt(style.gap) || 0;

  return card.offsetWidth + gap;
};

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: getScrollAmount(),
    behavior: 'smooth',
  });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -getScrollAmount(),
    behavior: 'smooth',
  });
});
