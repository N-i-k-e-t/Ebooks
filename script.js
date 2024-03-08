const links = document.querySelectorAll('nav a'); // Assuming links in nav

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
const ebookItems = document.querySelectorAll('.ebook');

ebookItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)'; // Subtle scale up
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)'; // Reset
    });
});
