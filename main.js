document.querySelector('.works-link').addEventListener('click', scrollToWorks);

function scrollToWorks() {
    let worksSection = document.querySelector('.works-section');
    
    if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
    }
}
