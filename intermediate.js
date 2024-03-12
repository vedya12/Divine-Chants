document.addEventListener("DOMContentLoaded", function() {
    var animatedElement = document.querySelector('.animated-element');
    var hasAnimationPlayed = localStorage.getItem('hasAnimationPlayed');
    
    if (!hasAnimationPlayed) {
      animatedElement.classList.add('play-animation');
      
      animatedElement.addEventListener('animationend', function() {
        localStorage.setItem('hasAnimationPlayed', true);
      }, {once: true});
    }
  });
  