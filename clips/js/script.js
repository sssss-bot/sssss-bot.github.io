document.addEventListener('DOMContentLoaded', function() {
  let video = document.getElementById('myVideo');
  let videoContainer = document.querySelector('.video-container');
  let played = false;

  // Function to check if element is in view
  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to play video when in view
  function playVideoIfInView() {
    if (!played && isInViewport(videoContainer)) {
      video.play();
      played = true;
    } else if (played && !isInViewport(videoContainer)) {
      video.pause();
      played = false;
    }
  }

  // Check if video is in view on initial load
  playVideoIfInView();

  // Check if video is in view on scroll
  window.addEventListener('scroll', function() {
    playVideoIfInView();
  });
});
