// imagePopup.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageOverlay');
    const img = document.getElementById('profilePic');
    const closeBtn = document.getElementById('closeBtn');

    // Open the modal when the image is clicked
    img.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal if user clicks outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
