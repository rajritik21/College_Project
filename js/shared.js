// Load navbar from pages
fetch('../navbar.html')
    .then(response => response.text())
    .then(data => {
        const navContainer = document.getElementById('navbar-container');
        navContainer.innerHTML = data;
        
        // Set active link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = navContainer.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    })
    .catch(err => console.error('Error loading navbar:', err));

// Load footer from pages
fetch('../footer_content.html')
    .then(response => response.text())
    .then(data => {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = data;
        }
    })
    .catch(err => console.error('Error loading footer:', err));
