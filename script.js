function toggleVisibility() {
  // Hide the present container entirely
  const presentContainer = document.querySelector('.present-container');
  presentContainer.style.display = 'none';
  // Show the modal
  showModal();
}

function showModal() {
  const modal = document.getElementById('myModal');
  modal.classList.add('show');
}

function playVideo() {
  // This function is triggered when "Continue" is clicked in the modal
  const modal = document.getElementById('myModal');
  const letterContent = document.getElementById('letterContent');
  const restartButton = document.getElementById('restartButton');
  const presentContainer = document.querySelector('.present-container');
  const body = document.body;

  // Hide the modal and show the Valentine message and restart button
  modal.classList.remove('show');
  letterContent.classList.add('visible');
  restartButton.classList.add('visible');

  // Hide the present container when the modal 'Continue' button is clicked
  presentContainer.style.display = 'none';

  // Play the background video if applicable
  const video = document.getElementById('videoBackground');
  video.style.display = 'block'; // Show the video
  video.play();
  body.classList.add('animate-background');
}

function restartEverything() {
  // Resets the application to its initial state
  const presentContainer = document.querySelector('.present-container');
  const letterContent = document.getElementById('letterContent');
  const video = document.getElementById('videoBackground');
  const restartButton = document.getElementById('restartButton');
  const body = document.body;

  // Stop and reset video
  video.currentTime = 0;
  video.pause();
  
  // Reset visibility states
  presentContainer.style.display = 'block'; // Make the present container visible again
  letterContent.classList.remove('visible'); // Hide the Valentine message
  restartButton.classList.remove('visible'); // Hide the restart button
  body.classList.remove('animate-background'); // Remove any background animations

  // Hide the video
  video.style.display = 'none';
}

// Ensure the modal is hidden initially and only the present container is interactive
document.getElementById('myModal').classList.remove('show');
document.getElementById('letterContent').classList.remove('visible');
document.getElementById('restartButton').classList.remove('visible');

// Event listeners to trigger functions
document.getElementById('continueButton').addEventListener('click', playVideo);
document.getElementById('restartButton').addEventListener('click', restartEverything);
