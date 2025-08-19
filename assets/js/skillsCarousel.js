// Skills Carousel Functionality
class SkillsCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('#skillsCarousel .skill-card-new');
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startAutoPlay();
        this.updateIndicators();
    }
    
    setupEventListeners() {
        // Previous button
        const prevBtn = document.getElementById('prevBtn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        // Next button
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause auto-play on hover
        const carousel = document.getElementById('skillsCarousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Pause auto-play on touch devices
        carousel.addEventListener('touchstart', () => this.pauseAutoPlay());
        carousel.addEventListener('touchend', () => this.startAutoPlay());
    }
    
    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return;
        
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');
        
        // Update indicators
        this.updateIndicators();
        
        // Restart auto-play
        this.restartAutoPlay();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.goToSlide(prevIndex);
    }
    
    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    startAutoPlay() {
        if (this.autoPlayInterval) return;
        
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    restartAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }
    
    // Public method to manually control auto-play
    setAutoPlayDelay(delay) {
        this.autoPlayDelay = delay;
        this.restartAutoPlay();
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SkillsCarousel();
});
