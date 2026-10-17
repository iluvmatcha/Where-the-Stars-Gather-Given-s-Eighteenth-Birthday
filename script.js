const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bg-music');

// Play/Pause Music Button
playBtn.addEventListener('click', function() {
  if (bgMusic.paused) {
    bgMusic.play();
    playBtn.innerHTML = '⏸️ Pause Music';
  } else {
    bgMusic.pause();
    playBtn.innerHTML = '🔊 Play Music';
  }
});

// Swap Photos Function
function goToSlide(slideNumber) {
  // If they are clicking to leave Slide 1, start the music automatically!
  if (slideNumber === 2) {
    bgMusic.play();
    playBtn.innerHTML = '⏸️ Pause Music';
  }

  // 1. Hide all slides
  const slides = document.querySelectorAll('.slide');
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });

  // 2. Show the target slide
  const nextSlide = document.getElementById('slide-' + slideNumber);
  if (nextSlide) {
    nextSlide.classList.add('active');
    window.scrollTo(0, 0);
  }
}