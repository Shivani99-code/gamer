
document.addEventListener('DOMContentLoaded', () => {
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    const handleScroll = () => {
        if (window.scrollY > 300) {
            scrollUpBtn.style.display = 'flex';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    };

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    scrollUpBtn.addEventListener('click', scrollToTop);
});
