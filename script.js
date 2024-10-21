const headers = document.querySelectorAll('.accordion-header');

//header event listener
headers.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling; 

        content.classList.toggle('active');

        headers.forEach(h => {
            if (h !== this) {
                h.nextElementSibling.classList.remove('active');
            }
        });
    });
});

// Customize your banner settings here
const bannerSpeed = 20; // Adjust the speed (higher = slower)

// Get the banner content element
const bannerContent = document.getElementById('bannerContent');

// Set the animation duration based on bannerSpeed
bannerContent.style.animationDuration = `${bannerSpeed}s`;

document.addEventListener('DOMContentLoaded', () => {
    const heartIcon = document.getElementById('heart-icon');
    
    heartIcon.addEventListener('click', () => {
        if (heartIcon.src.includes('images/heartempty.png')) {
            heartIcon.src = 'images/heartfull.png';
        } else {
            heartIcon.src = 'images/heartempty.png';
        }
    });
});
