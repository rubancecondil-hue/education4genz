// ==========================================
// Education4GenZ - Main JavaScript
// ==========================================

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Search Filter for Posts
function filterPosts() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();
    const posts = document.querySelectorAll('.blog-post-card');
    let visibleCount = 0;

    posts.forEach(function(post) {
        const title = post.getAttribute('data-title') || post.textContent;
        if (title.toLowerCase().includes(query) || query === '') {
            post.style.display = '';
            visibleCount++;
        } else {
            post.style.display = 'none';
        }
    });

    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.style.display = visibleCount === 0 && query !== '' ? 'block' : 'none';
    }
}

// Sidebar Search
function sidebarSearch() {
    const input = document.getElementById('sidebar-search');
    if (!input) return;
    const query = input.value.trim();
    if (query.length > 0) {
        filterPosts();
    }
}

// Expand/Collapse Archives
function toggleArchive(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle('hidden');
    }
    const icon = document.getElementById('icon-' + id);
    if (icon) {
        icon.textContent = el.classList.contains('hidden') ? '+' : '−';
    }
}

// Newsletter Form Validation
function validateNewsletter(event) {
    event.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    const message = document.getElementById('newsletter-message');
    if (!emailInput || !message) return;

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        message.textContent = 'Please enter your email address.';
        message.className = 'text-red-600 text-sm mt-1';
        message.style.display = 'block';
    } else if (!emailRegex.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.className = 'text-red-600 text-sm mt-1';
        message.style.display = 'block';
    } else {
        message.textContent = 'Thank you for subscribing!';
        message.className = 'text-green-700 text-sm mt-1';
        message.style.display = 'block';
        emailInput.value = '';
    }
}

// Contact Form Validation
function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const msg = document.getElementById('contact-message');
    const status = document.getElementById('contact-status');
    if (!name || !email || !msg || !status) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.value.trim() === '') {
        status.textContent = 'Please enter your name.';
        status.className = 'text-red-600 text-sm mt-2';
        return;
    }
    if (!emailRegex.test(email.value.trim())) {
        status.textContent = 'Please enter a valid email address.';
        status.className = 'text-red-600 text-sm mt-2';
        return;
    }
    if (msg.value.trim().length < 10) {
        status.textContent = 'Message must be at least 10 characters.';
        status.className = 'text-red-600 text-sm mt-2';
        return;
    }

    status.textContent = 'Message sent successfully! We will get back to you soon.';
    status.className = 'text-green-700 text-sm mt-2';
    name.value = '';
    email.value = '';
    msg.value = '';
}

// Comment Form Validation
function validateCommentForm(event) {
    event.preventDefault();
    const name = document.getElementById('comment-name');
    const comment = document.getElementById('comment-text');
    const status = document.getElementById('comment-status');
    if (!name || !comment || !status) return;

    if (name.value.trim() === '') {
        status.textContent = 'Please enter your name.';
        status.className = 'text-red-600 text-sm mt-2';
        return;
    }
    if (comment.value.trim().length < 5) {
        status.textContent = 'Comment must be at least 5 characters.';
        status.className = 'text-red-600 text-sm mt-2';
        return;
    }

    status.textContent = 'Comment submitted for review. Thank you!';
    status.className = 'text-green-700 text-sm mt-2';
    name.value = '';
    comment.value = '';
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/Hide Scroll-to-Top Button
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scroll-top-btn');
    if (btn) {
        if (window.scrollY > 400) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }
});

// Table of Contents smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
