// Get elements
var modal = document.getElementById("imageOverlay");
var img = document.getElementById("profilePic");
var closeBtn = document.getElementById("closeBtn");

// Open the modal when the image is clicked
img.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if user clicks outside the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
