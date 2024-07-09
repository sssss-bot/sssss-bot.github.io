// Function to check if an element is in viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle autoplay and pause
function handleAutoplay() {
  var videos = document.querySelectorAll('.video');

  // Loop through each video element
  videos.forEach(function(video) {
    // Check if video is in viewport
    if (isElementInViewport(video)) {
      video.play();
    } else {
      video.pause();
    }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', function() {
  handleAutoplay();
});

// Initial check on page load
handleAutoplay();
