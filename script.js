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
