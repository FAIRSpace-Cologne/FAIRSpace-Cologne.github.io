// ===== TABLE OF CONTENTS ACTIVE INDICATOR =====
// This script adds an active indicator (>) to TOC links based on current scroll position
// Features:
// - Hierarchical TOC with auto-expand/collapse sub-headings
// - Arrow indicator on active link
// - Blue line indicator on right sidebar that moves with content
// - Auto-expands sub-headings when scrolling to a heading
// - Auto-collapses when leaving the section

(function () {
    // Get all TOC links, sidebars, and the main content area
    const tocLeftLinks = document.querySelectorAll('.toc-left a');
    const rightSidebar = document.querySelector('.toc-right');
    const tocRightUL = rightSidebar ? rightSidebar.querySelector('ul') : null;
    const mainContent = document.querySelector('.main-content');

    if (!tocLeftLinks.length && !tocRightUL) return;

    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Create maps for links
    const leftLinkMap = {};   // For page navigation links (left sidebar)
    const rightLinkMap = {};  // For in-page anchor links (right sidebar)
    const sectionMap = {};    // Map of anchor IDs to elements
    const hierarchyMap = {};  // Map of sections to their subsections

    // Build left sidebar map
    tocLeftLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('#')) {
            const pageName = href.split('/').pop() || 'index.html';
            leftLinkMap[pageName] = link;
        }
    });

    // Function to build hierarchical TOC from page headings
    function buildHierarchicalTOC() {
        if (!mainContent || !tocRightUL) return;

        // Get all headings in the main content (h2, h3, h4, etc.)
        const headings = mainContent.querySelectorAll('h2, h3, h4, h5');

        // Clear existing right sidebar TOC and rebuild it
        tocRightUL.innerHTML = '';

        let currentH2Li = null;
        let currentH3Li = null;
        let currentH2Level = null;
        let currentH3Level = null;
        let h2Ul = null;
        let h3Ul = null;

        headings.forEach(heading => {
            const level = parseInt(heading.tagName.substring(1));

            // Ensure heading has an ID
            if (!heading.id) {
                heading.id = 'heading-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
            }

            const id = heading.id;
            const text = heading.textContent.trim();
            const href = '#' + id;

            // Create list item and link
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = href;
            link.textContent = text;
            link.setAttribute('data-href', href);
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });

            rightLinkMap[href] = link;
            sectionMap[id] = heading;

            if (level === 2) {
                // Main heading
                li.appendChild(link);
                tocRightUL.appendChild(li);
                currentH2Li = li;
                currentH2Level = level;
                h2Ul = null;
                h3Ul = null;
                currentH3Li = null;
                hierarchyMap[id] = { level: 2, children: [], parent: null };
            } else if (level === 3) {
                // Sub-heading under H2
                if (!h2Ul) {
                    h2Ul = document.createElement('ul');
                    h2Ul.className = 'toc-submenu';
                    if (currentH2Li) currentH2Li.appendChild(h2Ul);
                }
                const subLi = document.createElement('li');
                subLi.appendChild(link);
                h2Ul.appendChild(subLi);
                currentH3Li = subLi;
                currentH3Level = level;
                h3Ul = null;
                hierarchyMap[id] = { level: 3, children: [], parent: currentH2Level ? 'h2' : null };
            } else if (level === 4) {
                // Sub-sub-heading under H3
                if (!h3Ul && currentH3Li) {
                    h3Ul = document.createElement('ul');
                    h3Ul.className = 'toc-subsubmenu';
                    currentH3Li.appendChild(h3Ul);
                }
                const subsubLi = document.createElement('li');
                subsubLi.appendChild(link);
                if (h3Ul) h3Ul.appendChild(subsubLi);
                hierarchyMap[id] = { level: 4, children: [], parent: 'h3' };
            }
        });
    }

    // Function to collapse all submenus
    function collapseAllSubmenus() {
        const submenus = tocRightUL.querySelectorAll('.toc-submenu, .toc-subsubmenu');
        submenus.forEach(submenu => {
            submenu.classList.remove('expanded');
            submenu.style.maxHeight = '0';
            submenu.style.overflow = 'hidden';
        });
    }

    // Function to expand submenu for a given heading
    function expandSubmenus(headingId) {
        collapseAllSubmenus();

        // Find the link for this heading and expand its submenus
        const link = rightLinkMap['#' + headingId];
        if (!link) return;

        const li = link.closest('li');
        if (!li) return;

        // Expand direct submenu if it exists
        const submenu = li.querySelector(':scope > .toc-submenu, :scope > .toc-subsubmenu');
        if (submenu) {
            submenu.classList.add('expanded');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        }

        // Also expand parent menus if this is a sub-heading
        let parent = li.parentElement;
        while (parent) {
            if (parent.classList.contains('toc-submenu') || parent.classList.contains('toc-subsubmenu')) {
                parent.classList.add('expanded');
                parent.style.maxHeight = parent.scrollHeight + 'px';
            }
            parent = parent.parentElement;
        }
    }

    // Set active link and update indicator
    function setActiveLink(href, isLeftSidebar = true) {
        if (isLeftSidebar) {
            // Left sidebar - show arrow on the link for current page
            tocLeftLinks.forEach(link => {
                link.classList.remove('active');
            });
            if (leftLinkMap[href]) {
                leftLinkMap[href].classList.add('active');
            }
        } else {
            // Right sidebar - show arrow and move indicator line
            const allRightLinks = tocRightUL.querySelectorAll('a');
            allRightLinks.forEach(link => {
                link.classList.remove('active');
            });
            if (rightLinkMap[href]) {
                rightLinkMap[href].classList.add('active');
                updateIndicatorLine(rightLinkMap[href]);

                // Extract heading ID and expand submenus
                const headingId = href.substring(1);
                expandSubmenus(headingId);
            }
        }
    }

    // Update the blue line indicator position on right sidebar
    function updateIndicatorLine(activeLink) {
        if (!indicatorLine || !activeLink) return;

        if (!rightSidebar) return;

        // Get position of active link relative to the sidebar
        const sidebarRect = rightSidebar.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        // Calculate position within the sidebar, accounting for sidebar scroll
        const topOffset = linkRect.top - sidebarRect.top + rightSidebar.scrollTop;
        const height = linkRect.height;

        indicatorLine.style.top = topOffset + 'px';
        indicatorLine.style.height = height + 'px';
        indicatorLine.style.display = 'block';
    }

    // Initialize
    setActiveLink(currentPage, true);
    buildHierarchicalTOC();

    // Create a blue line indicator for right sidebar
    let indicatorLine = null;
    if (rightSidebar) {
        indicatorLine = document.createElement('div');
        indicatorLine.className = 'toc-indicator-line';
        rightSidebar.appendChild(indicatorLine);
    }

    // Handle right sidebar with intersection observer
    let observer = null; // Define observer at top level for rebuildTOC access
    if (mainContent) {
        // Observe sections and detect which are visible
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -66% 0px',
            threshold: 0.1
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id) {
                        setActiveLink('#' + id, false);
                    }
                }
            });
        }, observerOptions);

        // Observe all headings
        const headings = mainContent.querySelectorAll('h2, h3, h4, h5');
        headings.forEach(heading => {
            observer.observe(heading);
        });
    }

    // Handle link clicks
    document.querySelectorAll('.toc-sidebar a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href) {
                if (href.includes('#')) {
                    // Anchor link on right sidebar
                    e.preventDefault();
                    const target = document.getElementById(href.substring(1));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setActiveLink(href, false);
                } else {
                    // Page link on left sidebar
                    setActiveLink(href.split('/').pop() || 'index.html', true);
                }
            }
        });
    });

    // Update indicator line when right sidebar itself scrolls
    if (rightSidebar) {
        rightSidebar.addEventListener('scroll', () => {
            const activeRightLink = tocRightUL.querySelector('a.active');
            if (activeRightLink && indicatorLine) {
                updateIndicatorLine(activeRightLink);
            }
        }, { passive: true });
    }

    // Update on window resize
    window.addEventListener('resize', () => {
        const activeRightLink = tocRightUL.querySelector('a.active');
        if (activeRightLink && indicatorLine) {
            updateIndicatorLine(activeRightLink);
        }
    }, { passive: true });

    // Initial update of indicator line
    setTimeout(() => {
        const activeRightLink = tocRightUL.querySelector('a.active');
        if (activeRightLink) {
            setActiveLink(activeRightLink.getAttribute('href'), false);
        }
    }, 100);

    // Expose rebuildTOC function globally for markdown loader
    window.rebuildTOC = function () {
        buildHierarchicalTOC();

        // Re-observe headings after rebuild
        if (mainContent && observer) {
            const headings = mainContent.querySelectorAll('h2, h3, h4, h5');
            headings.forEach(heading => {
                observer.observe(heading);
            });
        }

        // Update indicator line after rebuild
        setTimeout(() => {
            const firstHeading = mainContent ? mainContent.querySelector('h2') : null;
            if (firstHeading && firstHeading.id) {
                setActiveLink('#' + firstHeading.id, false);
            }
        }, 100);
    };
})();
