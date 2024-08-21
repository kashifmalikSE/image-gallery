let currentIndex = 0;

function changeImage(step) {
    const images = document.querySelectorAll('.gallery-image');
    images[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + step + images.length) % images.length;
    
    images[currentIndex].classList.add('active');
}
