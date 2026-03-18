// ===== Dark Mode Toggle =====
(function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const toggleLabel = document.getElementById('toggleLabel');
    const body = document.body;

    const updateThemeImages = function (isDark) {
        const themedImages = document.querySelectorAll('[data-dark-src][data-light-src]');
        themedImages.forEach(function (img) {
            const lightSrc = img.getAttribute('data-light-src');
            const darkSrc = img.getAttribute('data-dark-src');
            img.src = isDark ? darkSrc : lightSrc;
        });
    };

    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('dark-mode');
        if (toggleSwitch) toggleSwitch.classList.add('active');
        if (toggleLabel) toggleLabel.textContent = 'Light Mode';
    }

    updateThemeImages(isDarkMode);

    // Toggle dark mode on click
    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
            const isNowDark = body.classList.contains('dark-mode');

            // Update toggle UI
            toggleSwitch.classList.toggle('active', isNowDark);
            if (toggleLabel) {
                toggleLabel.textContent = isNowDark ? 'Light Mode' : 'Dark Mode';
            }

            // Save preference
            localStorage.setItem('darkMode', isNowDark);

            updateThemeImages(isNowDark);
        });
    }
})();

// ===== Hamburger Menu Toggle =====
(function () {
    if (document.querySelector('.announcement-bar')) {
        document.body.classList.add('has-announcement');
    }
})();

// ===== SEARCH ICON TOGGLE =====
(function () {
    const searchIcon = document.querySelector('a.search-icon');
    const navCenter = document.querySelector('.nav-center');
    const searchInput = document.querySelector('.search-input-desktop');

    if (!searchIcon || !navCenter) {
        console.warn('Search icon or nav-center not found');
        return;
    }

    searchIcon.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Search icon clicked');
        navCenter.classList.toggle('active');

        // Focus input when search bar is opened
        if (navCenter.classList.contains('active')) {
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 100);
        }
    });

    // Close search bar when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-center') && !e.target.closest('a.search-icon')) {
            if (navCenter.classList.contains('active')) {
                navCenter.classList.remove('active');
            }
        }
    });
})();

// ===== SEARCH FUNCTIONALITY =====
(function () {
    const searchInput = document.querySelector('.search-input-desktop');
    const searchClearBtn = document.querySelector('.search-clear-btn');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) return;

    // Search database - contains all searchable content
    const searchDatabase = [
        {
            title: 'About Us',
            description: 'Learn about FAIRspace Cologne initiative, mission, and vision for research data management.',
            url: 'about.html',
            keywords: ['about', 'fairspace', 'cologne', 'mission', 'vision', 'initiative', 'fair', 'principles'],
            icon: 'fa-info-circle'
        },
        {
            title: 'RDM Knowledge',
            description: 'Comprehensive resources and guides for Research Data Management.',
            url: 'rdm-knowledge.html',
            keywords: ['rdm', 'research', 'data', 'management', 'knowledge', 'resources', 'guides'],
            icon: 'fa-book'
        },
        {
            title: 'FAIR Data Consultation',
            description: 'Expert guidance on implementing FAIR principles in your research workflow.',
            url: 'index.html#services',
            keywords: ['fair', 'consultation', 'advice', 'guidance', 'expert', 'principles'],
            icon: 'fa-hands-helping'
        },
        {
            title: 'Training & Workshops',
            description: 'Attend workshops and tutorials on data stewardship and metadata standards.',
            url: 'index.html#services',
            keywords: ['training', 'workshops', 'tutorials', 'learning', 'sessions', 'education'],
            icon: 'fa-graduation-cap'
        },
        {
            title: 'Infrastructure Support',
            description: 'Tools, templates, and repository support for data storage and sharing.',
            url: 'index.html#services',
            keywords: ['infrastructure', 'support', 'tools', 'repository', 'storage', 'technical'],
            icon: 'fa-server'
        },
        {
            title: 'Community Building',
            description: 'Connect with researchers and data experts through our FAIR data community.',
            url: 'index.html#services',
            keywords: ['community', 'building', 'network', 'collaboration', 'connect', 'researchers'],
            icon: 'fa-users'
        },
        {
            title: 'Policy Consultation',
            description: 'Align your institutional data policy with FAIR and open science principles.',
            url: 'index.html#services',
            keywords: ['policy', 'consultation', 'institutional', 'governance', 'compliance'],
            icon: 'fa-balance-scale'
        },
        {
            title: 'FAIRdata Cologne',
            description: 'Access comprehensive tutorials and training materials for FAIR data management.',
            url: 'fairdata-cologne.html',
            keywords: ['fairdata', 'videos', 'tutorials', 'learning', 'materials', 'training', 'user guidelines', 'guidelines', 'best practices'],
            icon: 'fa-video'
        },
        {
            title: 'RDM Training Materials',
            description: 'Download workshop slides, handouts, and resources for RDM training sessions.',
            url: 'rdm-training.html',
            keywords: ['training', 'materials', 'resources', 'downloads', 'slides', 'handouts', 'workshops', 'courses', 'zenodo', 'presentations', 'exercises', 'rdm training'],
            icon: 'fa-file-download'
        },
        {
            title: 'Our Team',
            description: 'Meet the experts behind FAIRspace Cologne.',
            url: 'team.html',
            keywords: ['team', 'staff', 'members', 'people', 'researchers', 'experts'],
            icon: 'fa-user-friends'
        },
        {
            title: 'Hajira Jabeen',
            description: 'Data Scientist passionate about research data management and open science.',
            url: 'team.html',
            keywords: ['hajira', 'jabeen', 'data', 'scientist', 'researcher'],
            icon: 'fa-user'
        },
        {
            title: 'Sergio Avila-Calero',
            description: 'Research Software Engineer focused on interoperability and data workflows.',
            url: 'team.html',
            keywords: ['sergio', 'avila', 'calero', 'software', 'engineer', 'developer'],
            icon: 'fa-user'
        },
        {
            title: 'Publications',
            description: 'Browse our research articles and publications on FAIR data principles.',
            url: 'publication.html',
            keywords: ['publications', 'articles', 'papers', 'research', 'documents', 'FAIR', 'data management', 'research data', 'citations', 'academic papers', 'scientific publications', 'DOI', 'open science'],
            icon: 'fa-newspaper'
        },
        {
            title: 'Dataverse',
            description: 'Open-source platform for sharing, citing, and preserving research data.',
            url: 'index.html#projects',
            keywords: ['dataverse', 'platform', 'repository', 'data', 'sharing', 'preservation'],
            icon: 'fa-database'
        },
        {
            title: 'ARTICYST Project',
            description: 'Collaborative project promoting FAIR data workflows in the arts.',
            url: 'https://fairspace-cologne.github.io/ARTICYST/',
            keywords: ['articyst', 'project', 'arts', 'fair', 'workflows', 'collaboration'],
            icon: 'fa-palette'
        },
        {
            title: 'Introduction to Research Data Management',
            description: 'Learn the fundamentals of research data management and best practices.',
            url: 'rdm-knowledge.html#intro-rdm',
            keywords: ['introduction', 'rdm', 'research', 'data', 'management', 'fundamentals', 'best', 'practices'],
            icon: 'fa-book-open'
        },
        {
            title: 'FAIR Data Principles',
            description: 'Understanding Findable, Accessible, Interoperable, and Reusable data principles.',
            url: 'rdm-knowledge.html#fair-principles',
            keywords: ['fair', 'principles', 'findable', 'accessible', 'interoperable', 'reusable', 'data'],
            icon: 'fa-check-circle'
        },
        {
            title: 'Data Management Plans',
            description: 'Creating and implementing effective data management plans for research projects.',
            url: 'rdm-knowledge.html#data-plans',
            keywords: ['data', 'management', 'plans', 'dmp', 'research', 'projects', 'implementation'],
            icon: 'fa-clipboard-list'
        },
        {
            title: 'Metadata Standards and Best Practices',
            description: 'Standards and practices for creating and managing metadata.',
            url: 'rdm-knowledge.html#metadata',
            keywords: ['metadata', 'standards', 'best', 'practices', 'data', 'description'],
            icon: 'fa-tags'
        },
        {
            title: 'Data Preservation and Archiving',
            description: 'Strategies for long-term data preservation and archiving.',
            url: 'rdm-knowledge.html#preservation',
            keywords: ['data', 'preservation', 'archiving', 'long-term', 'storage', 'backup'],
            icon: 'fa-archive'
        },
        {
            title: 'Open Science and Data Sharing',
            description: 'Principles and practices of open science and data sharing.',
            url: 'rdm-knowledge.html#open-science',
            keywords: ['open', 'science', 'data', 'sharing', 'collaboration', 'transparency'],
            icon: 'fa-share-alt'
        },
        {
            title: 'Data Security and Privacy',
            description: 'Ensuring data security and protecting privacy in research.',
            url: 'rdm-knowledge.html#security',
            keywords: ['data', 'security', 'privacy', 'protection', 'gdpr', 'confidentiality'],
            icon: 'fa-shield-alt'
        },
        {
            title: 'Data Repositories and Infrastructure',
            description: 'Choosing and using data repositories and research infrastructure.',
            url: 'rdm-knowledge.html#repositories',
            keywords: ['data', 'repositories', 'infrastructure', 'storage', 'access', 'platforms'],
            icon: 'fa-server'
        },
        {
            title: 'Research Software and Tools',
            description: 'Essential software and tools for research data management.',
            url: 'rdm-knowledge.html#software',
            keywords: ['research', 'software', 'tools', 'applications', 'data', 'analysis'],
            icon: 'fa-tools'
        },
        {
            title: 'Training and Support Resources',
            description: 'Resources for training and support in research data management.',
            url: 'rdm-knowledge.html#training',
            keywords: ['training', 'support', 'resources', 'learning', 'education', 'help'],
            icon: 'fa-graduation-cap'
        }
    ];

    // Clear button functionality
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.classList.remove('active');
        searchInput.focus();
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar-center')) {
            searchResults.classList.remove('active');
        }
    });

    // Search functionality
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();

        if (!query) {
            searchResults.classList.remove('active');
            return;
        }

        // Search through database
        const results = searchDatabase.filter(item => {
            // Check if query matches title, description, or keywords
            const titleMatch = item.title.toLowerCase().includes(query);
            const descMatch = item.description.toLowerCase().includes(query);
            const keywordMatch = item.keywords.some(keyword => keyword.includes(query));

            return titleMatch || descMatch || keywordMatch;
        });

        // Display results
        displaySearchResults(results, query);
    };

    // Display search results
    const displaySearchResults = (results, query) => {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p><strong>No results found</strong></p>
                    <p>Try different keywords or browse our menu</p>
                </div>
            `;
            searchResults.classList.add('active');
            return;
        }

        let resultsHTML = `
            <div class="search-results-header">
                <h3>Search Results</h3>
                <div class="search-results-count">${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"</div>
            </div>
        `;

        results.forEach(result => {
            const isExternal = result.url.startsWith('http');
            const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';

            resultsHTML += `
                <div class="search-result-item">
                    <a href="${result.url}"${targetAttr}>
                        <div class="search-result-title">
                            <i class="fas ${result.icon} search-result-icon"></i>
                            <span>${highlightMatch(result.title, query)}</span>
                        </div>
                        <div class="search-result-description">
                            ${highlightMatch(result.description, query)}
                        </div>
                        <div class="search-result-path">
                            ${result.url}${isExternal ? ' <i class="fas fa-external-link-alt"></i>' : ''}
                        </div>
                    </a>
                </div>
            `;
        });

        searchResults.innerHTML = resultsHTML;
        searchResults.classList.add('active');
    };

    // Highlight matching text
    const highlightMatch = (text, query) => {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong style="background-color: #fff3cd; padding: 0 2px;">$1</strong>');
    };

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Real-time search as user types (debounced)
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch();
        }, 150); // 150ms debounce
    });

    // Close search results when pressing Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.value = '';
            searchClearBtn.classList.remove('active');
        }
    });

    // Show/hide clear button based on input
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim()) {
            searchClearBtn.classList.add('active');
        } else {
            searchClearBtn.classList.remove('active');
        }
    });

    // Close search results when clicking on a result
    searchResults.addEventListener('click', (e) => {
        if (e.target.closest('.search-result-item')) {
            // Small delay to allow navigation
            setTimeout(() => {
                searchResults.classList.remove('active');
                searchInput.value = '';
                searchClearBtn.classList.remove('active');
            }, 100);
        }
    });
})();

// ===== Hamburger Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Close menu & scroll when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // Close the menu first
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');

        // Only handle smooth scrolling if we're on index.html AND clicking an anchor
        if (href.startsWith('#')) {
            // Pure anchor link (like #about) - only on same page
            e.preventDefault();
            const target = document.getElementById(href.substring(1));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
        // For all other links (team.html, articles.html, index.html#about), let browser handle normally
    });
});

// Handle scrolling to section after page load (when coming from another page with #hash)
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
            const target = document.getElementById(hash.substring(1));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

// ===== ANNOUNCEMENT ROTATOR (Synced with News) =====
(function () {
    // Extract news data from news slides
    const newsSlides = document.querySelectorAll('.news-slide');
    if (!newsSlides.length) return;

    // Create announcements data from news items
    const announcements = [];
    newsSlides.forEach((slide, idx) => {
        const heading = slide.querySelector('.news-content h3');
        const readMoreLink = slide.querySelector('.news-read-more');
        if (heading && readMoreLink) {
            announcements.push({
                title: heading.textContent.trim(),
                url: readMoreLink.getAttribute('href') // Direct link to news page
            });
        }
    });

    const el = document.querySelector('.announcement-text');
    const link = document.querySelector('.announcement-link');
    const nextBtn = document.querySelector('.announce-next');
    const prevBtn = document.querySelector('.announce-prev');
    if (!el || announcements.length === 0) return;

    let idx = 0;
    let autoTimer = null;
    const AUTO_DELAY = 5000;

    const show = (i) => {
        el.classList.add('fade-out');
        setTimeout(() => {
            const announcement = announcements[i];
            el.textContent = announcement.title;
            if (link) {
                // Link directly to the specific news page
                link.href = announcement.url;
            }
            el.classList.remove('fade-out');
        }, 320);
    };

    const startAuto = () => {
        clearAuto();
        autoTimer = setTimeout(() => {
            idx = (idx + 1) % announcements.length;
            show(idx);
            startAuto();
        }, AUTO_DELAY);
    };

    const clearAuto = () => {
        if (autoTimer) {
            clearTimeout(autoTimer);
            autoTimer = null;
        }
    };

    // Start automatic rotation
    show(0);
    startAuto();

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearAuto();
            idx = (idx + 1) % announcements.length;
            show(idx);
            startAuto();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearAuto();
            idx = (idx - 1 + announcements.length) % announcements.length;
            show(idx);
            startAuto();
        });
    }

    // Optional: pause auto-advance when hovering
    const wrapper = document.querySelector('.announcement-inner');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', clearAuto);
        wrapper.addEventListener('mouseleave', startAuto);
        wrapper.addEventListener('focusin', clearAuto);
        wrapper.addEventListener('focusout', startAuto);
    }
})();

// ===== NEWS & EVENTS ROTATOR =====
(function () {
    const slides = document.querySelectorAll('.news-slide');
    const prevBtn = document.querySelector('.news-prev');
    const nextBtn = document.querySelector('.news-next');
    const dotsContainer = document.querySelector('.news-dots');

    if (!slides.length) return;

    let currentSlide = 0;
    let autoTimer = null;
    const AUTO_DELAY = 7000; // 7 seconds per slide

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('news-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            clearAuto();
            goToSlide(index);
            startAuto();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.news-dot');

    const goToSlide = (n) => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = n;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        goToSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        goToSlide(currentSlide - 1);
    };

    const startAuto = () => {
        clearAuto();
        autoTimer = setTimeout(() => {
            nextSlide();
            startAuto();
        }, AUTO_DELAY);
    };

    const clearAuto = () => {
        if (autoTimer) {
            clearTimeout(autoTimer);
            autoTimer = null;
        }
    };

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearAuto();
            nextSlide();
            startAuto();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearAuto();
            prevSlide();
            startAuto();
        });
    }

    // Pause on hover
    const newsContainer = document.querySelector('.news-container');
    if (newsContainer) {
        newsContainer.addEventListener('mouseenter', clearAuto);
        newsContainer.addEventListener('mouseleave', startAuto);
    }

    // Start automatic rotation
    startAuto();
})();
