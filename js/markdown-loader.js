// ===== MARKDOWN CONTENT LOADER =====
// This script loads markdown files and converts them to HTML with full TOC support
// Features:
// - Loads markdown files from the pages/ directory
// - Supports frontmatter metadata (YAML-style) for automatic page routing
// - Supports GitHub-style alerts (>[!TIP], >[!NOTE], >[!IMPORTANT], >[!WARNING])
// - Supports <details> and <summary> tags
// - Auto-generates IDs for headings for TOC linking
// - Triggers TOC rebuild after content is loaded
// - Maintains all existing animations and scroll behaviors

console.log('[markdown-loader.js] Loading...');

(function () {
    console.log('[markdown-loader.js] IIFE starting...');

    // Configuration
    // Markdown files live in the pages/ directory. Depending on whether the page is
    // served from the repository root or from an html/ subfolder, the base path needs
    // to adjust accordingly.
    const htmlFolderPrefix = window.location.pathname.includes('/html/') ? '../' : '';
    const MARKDOWN_BASE_PATH = `${htmlFolderPrefix}pages/`;
    console.log('[markdown-loader.js] MARKDOWN_BASE_PATH set to:', MARKDOWN_BASE_PATH);

    /**
     * Parse YAML frontmatter from markdown
     * Frontmatter format:
     * ---
     * section: rdm-knowledge
     * title: Page Title
     * subtitle: Optional subtitle
     * ---
     * @param {string} markdownText - The raw markdown text
     * @returns {object} - { metadata: {...}, content: '...' }
     */
    function parseFrontmatter(markdownText) {
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
        const match = markdownText.match(frontmatterRegex);

        if (!match) {
            // No frontmatter found
            return { metadata: {}, content: markdownText };
        }

        const frontmatterText = match[1];
        const content = match[2];
        const metadata = {};

        // Parse simple YAML (key: value pairs)
        const lines = frontmatterText.split('\n');
        lines.forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                const key = line.substring(0, colonIndex).trim();
                const value = line.substring(colonIndex + 1).trim();
                metadata[key] = value;
            }
        });

        console.log('[parseFrontmatter] Extracted metadata:', metadata);
        return { metadata, content };
    }

    /**
     * Load and render a markdown file
     * @param {string} filename - The markdown file name (e.g., 'data-reuse.md')
     * @param {string} targetSelector - CSS selector for the target container (default: '.main-content section')
     */
    window.loadMarkdownContent = async function (filename, targetSelector = null, options = {}) {
        console.log('[loadMarkdownContent] FUNCTION CALLED with filename:', filename);
        try {
            // Backward-compatible signature support:
            // loadMarkdownContent(filename, options)
            let resolvedTargetSelector = targetSelector;
            let resolvedOptions = options || {};

            if (targetSelector && typeof targetSelector === 'object') {
                resolvedOptions = targetSelector;
                resolvedTargetSelector = null;
            }

            // Wait for marked.js to be loaded
            let attempts = 0;
            const maxAttempts = 50;
            while (typeof marked === 'undefined' && attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 100));
                attempts++;
            }

            if (typeof marked === 'undefined') {
                throw new Error('marked.js library failed to load after waiting');
            }

            console.log('[loadMarkdownContent] marked.js is ready');

            // Fetch the markdown file
            console.log('[loadMarkdownContent] Fetching from:', MARKDOWN_BASE_PATH + filename);
            const response = await fetch(MARKDOWN_BASE_PATH + filename);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.statusText}`);
            }

            const markdownText = await response.text();
            console.log('[loadMarkdownContent] Markdown file fetched, length:', markdownText.length);

            // Parse frontmatter
            const { metadata, content } = parseFrontmatter(markdownText);

            // Parse and render the markdown content (without frontmatter)
            const htmlContent = await parseMarkdown(content);
            console.log('[loadMarkdownContent] Markdown parsed successfully');

            // Quarto-style optional modes
            const sectionId = (resolvedOptions.sectionId || '').trim();
            const placeholderSelector = resolvedOptions.placeholderSelector || '[data-md-section]';
            const placeholders = document.querySelectorAll(placeholderSelector);

            // Mode A: Inject multiple sections into placeholders, if present
            if (placeholders.length > 0) {
                const sectionMap = extractSectionsByHeadingId(htmlContent);
                let injectedCount = 0;

                placeholders.forEach(placeholder => {
                    const requestedSection = (placeholder.getAttribute('data-md-section') || '').trim();
                    const sectionHtml = sectionMap[requestedSection];

                    if (sectionHtml) {
                        placeholder.innerHTML = `<div class="markdown-content">${sectionHtml}</div>`;
                        enhanceCodeBlocks(placeholder);
                        injectedCount++;
                    } else {
                        console.warn(`[loadMarkdownContent] Section not found for placeholder: ${requestedSection}`);
                    }
                });

                // Rebuild TOC if present and at least one section was injected
                if (injectedCount > 0) {
                    try {
                        if (typeof window.rebuildTOC === 'function') {
                            window.rebuildTOC();
                        }
                    } catch (tocError) {
                        console.warn('[loadMarkdownContent] TOC error:', tocError);
                    }

                    console.log(`[loadMarkdownContent] SUCCESS: Injected ${injectedCount} Quarto-style section(s) from ${filename}`);
                    return;
                }
            }

            // Find target element - try multiple strategies
            let targetElement = null;

            if (resolvedTargetSelector) {
                targetElement = document.querySelector(resolvedTargetSelector);
            }

            // If no target found, try to find the .rdm-knowledge-card div
            if (!targetElement) {
                const card = document.querySelector('.rdm-knowledge-card');
                if (card) {
                    targetElement = card;
                    console.log('[loadMarkdownContent] Using .rdm-knowledge-card as target');
                }
            }

            // If still not found, try the section
            if (!targetElement) {
                targetElement = document.querySelector('.main-content section');
                console.log('[loadMarkdownContent] Using .main-content section as target');
            }

            if (!targetElement) {
                console.error('[loadMarkdownContent] Target element not found');
                throw new Error('Could not find target element to insert content');
            }

            // Mode B: Inject one specific section into target
            if (sectionId) {
                const sectionMap = extractSectionsByHeadingId(htmlContent);
                const selectedSection = sectionMap[sectionId];

                if (!selectedSection) {
                    throw new Error(`Section "${sectionId}" not found in ${filename}. Use heading IDs like "## My Heading {#my-heading}".`);
                }

                targetElement.innerHTML = `<div class="markdown-content">${selectedSection}</div>`;
                enhanceCodeBlocks(targetElement);

                try {
                    if (typeof window.rebuildTOC === 'function') {
                        window.rebuildTOC();
                    }
                } catch (tocError) {
                    console.warn('[loadMarkdownContent] TOC error:', tocError);
                }

                console.log('[loadMarkdownContent] SUCCESS: Section loaded:', sectionId);
                return;
            }

            console.log('[loadMarkdownContent] Found target, setting innerHTML');
            targetElement.innerHTML = htmlContent;
            console.log('[loadMarkdownContent] Content inserted into DOM');

            // Update page title if metadata contains title
            if (metadata.title) {
                document.title = `${metadata.title} | FAIRspace Cologne`;
            }

            // Enhance rendered markdown with interactive features
            enhanceCodeBlocks(targetElement);

            // Trigger TOC rebuild (from toc-indicator.js)
            try {
                if (typeof window.rebuildTOC === 'function') {
                    console.log('[loadMarkdownContent] Calling rebuildTOC');
                    window.rebuildTOC();
                    console.log('[loadMarkdownContent] rebuildTOC completed');
                } else {
                    console.warn('[loadMarkdownContent] rebuildTOC not available');
                }
            } catch (tocError) {
                console.warn('[loadMarkdownContent] TOC error:', tocError);
            }

            console.log('[loadMarkdownContent] SUCCESS: Markdown loaded:', filename);
        } catch (error) {
            console.error('[loadMarkdownContent] CAUGHT ERROR:', error.message);
            // Show error on page
            const card = document.querySelector('.rdm-knowledge-card');
            if (card) {
                card.innerHTML = `<div class="markdown-content"><p style="color: red; font-weight: bold;">Error loading content:</p><p style="color: red;">${error.message}</p><p style="font-size: 0.9em; color: #666;">Check browser console for more details.</p></div>`;
            }
        }
    };

    /**
     * Auto-load markdown content based on URL parameter
     * Usage: Simply add ?page=filename (without .md extension) to the URL
     * Example: content-page.html?page=data-reuse will load pages/data-reuse.md
     * 
     * Or use the full path: ?md=pages/DataStorage/data-backup
     */
    window.autoLoadMarkdown = function (targetSelector = null) {
        console.log('[autoLoadMarkdown] Starting auto-load from URL parameters');

        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);

        // Optional Quarto-style section target
        const sectionId = urlParams.get('section');
        const options = sectionId ? { sectionId } : {};

        // Check for 'page' parameter (just filename)
        let mdFile = urlParams.get('page');
        if (mdFile) {
            mdFile = mdFile.endsWith('.md') ? mdFile : mdFile + '.md';
            console.log('[autoLoadMarkdown] Loading from page parameter:', mdFile);
            window.loadMarkdownContent(mdFile, targetSelector, options);
            return true;
        }

        // Check for 'md' parameter (full path from pages/ directory)
        const mdPath = urlParams.get('md');
        if (mdPath) {
            const fullPath = mdPath.endsWith('.md') ? mdPath : mdPath + '.md';
            // Remove 'pages/' prefix if user included it
            const cleanPath = fullPath.replace(/^pages\//, '');
            console.log('[autoLoadMarkdown] Loading from md parameter:', cleanPath);
            window.loadMarkdownContent(cleanPath, targetSelector, options);
            return true;
        }

        console.log('[autoLoadMarkdown] No URL parameters found');
        return false;
    };

    /**

     * Parse markdown text to HTML
     * @param {string} markdown - The markdown text
     * @returns {string} - HTML string
     */
    async function parseMarkdown(markdown) {
        console.log('[parseMarkdown] Starting markdown parse');

        // Wait for marked.js to be available
        if (typeof marked === 'undefined') {
            console.error('marked.js library not loaded. Please include it via CDN.');
            return '<p>Error: Markdown parser not available</p>';
        }

        console.log('[parseMarkdown] marked.js available, setting options');

        // Configure marked options - simple approach first
        try {
            marked.setOptions({
                gfm: true,
                breaks: true,
                headerIds: true,
                mangle: false
            });
            console.log('[parseMarkdown] marked options set successfully');
        } catch (e) {
            console.error('[parseMarkdown] Error setting marked options:', e);
        }

        // Pre-process markdown to handle special syntax
        markdown = processGithubAlerts(markdown);
        markdown = processDetailsBlocks(markdown);

        console.log('[parseMarkdown] Calling marked.parse');

        // Convert markdown to HTML
        let html = '';
        try {
            html = marked.parse(markdown);
            console.log('[parseMarkdown] marked.parse completed, HTML length:', html.length);
        } catch (e) {
            console.error('[parseMarkdown] Error in marked.parse:', e);
            html = '<p style="color: red;">Error parsing markdown: ' + e.message + '</p>';
        }

        // Post-process HTML - add/normalize IDs for headings
        html = addHeadingIds(html);

        // Post-process HTML
        html = wrapInContentCard(html);

        console.log('[parseMarkdown] Parsing complete, returning HTML with length:', html.length);
        return html;
    }

    /**
     * Add IDs to headings in the HTML
     */
    function addHeadingIds(html) {
        const temp = document.createElement('div');
        temp.innerHTML = html;

        const headings = temp.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            // Quarto/Pandoc-style explicit ID syntax in heading text:
            // ## Section title {#section-id}
            const text = (heading.textContent || '').trim();
            const explicitIdMatch = text.match(/^(.*)\s\{#([A-Za-z][\w-]*)\}\s*$/);

            if (explicitIdMatch) {
                const cleanText = explicitIdMatch[1].trim();
                const explicitId = explicitIdMatch[2].trim();

                // Remove trailing {#id} from visible heading text
                if (heading.lastChild && heading.lastChild.nodeType === Node.TEXT_NODE) {
                    heading.lastChild.nodeValue = heading.lastChild.nodeValue.replace(/\s*\{#[A-Za-z][\w-]*\}\s*$/, '');
                } else {
                    heading.textContent = cleanText;
                }

                heading.id = explicitId;
                return;
            }

            if (!heading.id) {
                heading.id = generateId(text);
            }
        });

        return temp.innerHTML;
    }

    /**
     * Extract section HTML by heading ID.
     * A section includes the heading and all following sibling nodes
     * until the next heading of the same or higher level.
     */
    function extractSectionsByHeadingId(html) {
        const sectionMap = {};
        const temp = document.createElement('div');
        temp.innerHTML = html;

        const contentRoot = temp.querySelector('.markdown-content') || temp;
        const children = Array.from(contentRoot.children);

        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (!node || !/^H[1-6]$/.test(node.tagName || '')) continue;

            const id = (node.id || '').trim();
            if (!id) continue;

            const currentLevel = parseInt(node.tagName.substring(1), 10);
            const sectionNodes = [node.cloneNode(true)];

            for (let j = i + 1; j < children.length; j++) {
                const next = children[j];
                if (/^H[1-6]$/.test(next.tagName || '')) {
                    const nextLevel = parseInt(next.tagName.substring(1), 10);
                    if (nextLevel <= currentLevel) {
                        break;
                    }
                }
                sectionNodes.push(next.cloneNode(true));
            }

            sectionMap[id] = sectionNodes.map(n => n.outerHTML).join('');
        }

        return sectionMap;
    }

    /**
     * Process GitHub-style alerts: >[!TYPE] message
     */
    function processGithubAlerts(markdown) {
        const alertTypes = ['TIP', 'NOTE', 'IMPORTANT', 'WARNING', 'CAUTION'];

        const alertClasses = {
            'TIP': 'alert-tip',
            'NOTE': 'alert-note',
            'IMPORTANT': 'alert-important',
            'WARNING': 'alert-warning',
            'CAUTION': 'alert-caution'
        };

        const alertIcons = {
            'TIP': '💡',
            'NOTE': 'ℹ️',
            'IMPORTANT': '❗',
            'WARNING': '⚠️',
            'CAUTION': '🛑'
        };

        let alertCount = 0;
        alertTypes.forEach(type => {
            // Match pattern: >[!TYPE] followed by any number of > lines
            const pattern = new RegExp(
                `>\\s*\\[!${type}\\]\\s*\\n((?:>.*\\n?)*)`,
                'gi'
            );

            markdown = markdown.replace(pattern, (match, content) => {
                alertCount++;
                // Remove > from each line of content
                const rawLines = content.split('\n')
                    .map(line => line.replace(/^>\s?/, ''))
                    .filter(line => line.trim() !== '')
                    .join('\n');

                // Parse the content as markdown to HTML
                let parsedContent = '';
                try {
                    if (typeof marked !== 'undefined') {
                        parsedContent = marked.parse(rawLines);
                    } else {
                        parsedContent = rawLines;
                    }
                } catch (e) {
                    console.warn('Error parsing alert content:', e);
                    parsedContent = rawLines;
                }

                // Remove the wrapping <p> tags that marked adds if there's only one paragraph
                // Keep structure for multiple elements
                parsedContent = parsedContent.trim();

                const className = alertClasses[type];
                const icon = alertIcons[type];

                console.log(`[processGithubAlerts] Found alert #${alertCount} type: ${type}`);

                return `<div class="alert ${className}">
                    <div class="alert-icon">${icon}</div>
                    <div class="alert-content">
                        <strong>${type}</strong>
                        ${parsedContent}
                    </div>
                </div>\n`;
            });
        });

        console.log('[processGithubAlerts] Processed', alertCount, 'alerts');
        return markdown;
    }

    /**
     * Process <details> and <summary> blocks
     * These work natively in HTML, but we ensure proper formatting
     */
    function processDetailsBlocks(markdown) {
        // Details blocks are already HTML, so marked.js will handle them
        // We just need to ensure they're properly formatted
        return markdown;
    }

    /**
     * Enhance rendered markdown code blocks with GitHub-like UI
     */
    function enhanceCodeBlocks(targetElement) {
        if (!targetElement) return;

        console.log('[enhanceCodeBlocks] Starting code block enhancement');

        // Find the markdown-content wrapper
        const markdownContent = targetElement.querySelector('.markdown-content');
        if (!markdownContent) {
            console.warn('[enhanceCodeBlocks] .markdown-content not found');
            return;
        }

        const codeBlocks = markdownContent.querySelectorAll('pre > code');
        console.log('[enhanceCodeBlocks] Found', codeBlocks.length, 'code blocks');

        codeBlocks.forEach((code, index) => {
            const pre = code.parentElement;
            if (!pre) return;

            // Skip if already wrapped
            if (pre.parentElement?.classList.contains('md-code-block')) {
                console.log('[enhanceCodeBlocks] Code block', index, 'already wrapped, skipping');
                return;
            }

            const className = code.className || '';
            const langMatch = className.match(/language-([\w-]+)/i);
            const language = langMatch ? langMatch[1].toUpperCase() : 'CODE';

            console.log('[enhanceCodeBlocks] Processing code block', index, 'language:', language);

            const wrapper = document.createElement('div');
            wrapper.className = 'md-code-block';

            const header = document.createElement('div');
            header.className = 'md-code-header';

            const langLabel = document.createElement('span');
            langLabel.className = 'md-code-lang';
            langLabel.textContent = language;

            const copyButton = document.createElement('button');
            copyButton.type = 'button';
            copyButton.className = 'md-code-copy-btn';
            copyButton.textContent = 'Copy';
            copyButton.setAttribute('aria-label', 'Copy code block');

            copyButton.addEventListener('click', async () => {
                const textToCopy = code.textContent || '';
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    copyButton.textContent = 'Copied!';
                    copyButton.classList.add('copied');
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                        copyButton.classList.remove('copied');
                    }, 1500);
                    console.log('[enhanceCodeBlocks] Code copied to clipboard');
                } catch (error) {
                    console.warn('[enhanceCodeBlocks] Clipboard copy failed:', error);
                    copyButton.textContent = 'Failed';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 1500);
                }
            });

            header.appendChild(langLabel);
            header.appendChild(copyButton);

            // Insert wrapper before pre
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(header);
            wrapper.appendChild(pre);

            console.log('[enhanceCodeBlocks] Code block', index, 'wrapped and enhanced');
        });

        console.log('[enhanceCodeBlocks] Code block enhancement complete');
    }

    /**
     * Generate a unique ID from heading text
     */
    function generateId(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-')      // Replace spaces with hyphens
            .replace(/-+/g, '-')       // Replace multiple hyphens with single
            .replace(/^-|-$/g, '');    // Remove leading/trailing hyphens
    }

    /**
     * Wrap content in a card div for consistent styling
     * The content will be placed inside the existing .rdm-knowledge-card div
     * So we just return the HTML, or wrap it only if needed
     */
    function wrapInContentCard(html) {
        // Just return the parsed HTML, don't wrap it again
        // The target element (rdm-knowledge-card) provides the wrapper
        return `<div class="markdown-content">${html}</div>`;
    }

})();