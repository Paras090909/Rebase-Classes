document.addEventListener('DOMContentLoaded', () => {
    // Cart Interaction Mock
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartBadge = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update button visual
            const originalText = btn.innerText;
            btn.innerText = 'Added!';
            btn.style.backgroundColor = '#10b981'; // Green
            btn.style.color = 'white';

            // Update cart counter
            cartCount++;
            cartBadge.innerText = cartCount;
            
            // Add bump animation to badge
            cartBadge.classList.remove('bump');
            // Trigger reflow to restart animation
            void cartBadge.offsetWidth;
            cartBadge.classList.add('bump');

            // Reset button after 2 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 2000);
        });
    });

    // Sticky Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
