document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('You clicked on:', item.querySelector('h2').textContent);
        });
    });
});
