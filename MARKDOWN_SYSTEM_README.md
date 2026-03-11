# Markdown Content System for FAIRspace Cologne Website

This system allows anyone to create content for the website using simple Markdown files, without needing direct access to edit HTML. The markdown content is automatically converted to HTML with full support for all website features, including the animated table of contents and scroll effects.

## 🎉 NEW: Simplified Workflow

**NEW FEATURES (2025):**
- ✨ **Frontmatter Support** - Add metadata to your markdown files
- ✨ **Auto-Routing** - Load any markdown file using URL parameters
- ✨ **Generic Template** - One HTML file (`content-page.html`) for all markdown content
- ✨ **Unique Icons** - IMPORTANT (❗) and WARNING (⚠️) now have different icons

**NEW FEATURES (2026):**
- ✨ **Quarto-Style Section IDs** - Use heading attributes like `## Overview {#overview}`
- ✨ **Section Routing** - Load a single section via URL parameter `?section=overview`
- ✨ **Section Placeholders** - Auto-inject sections into intended HTML targets using `data-md-section`

## 📁 Files in the System

1. **`markdown-loader.js`** - JavaScript that loads and parses markdown files with frontmatter support
2. **`content-page.html`** - Generic template for auto-loading markdown content via URL parameters
3. **`format/markdown-template.md`** - Complete template and guide for writing content
4. **`format/markdown-with-frontmatter-example.md`** - Example showing the new frontmatter workflow
5. **Alert styles in `style.css`** - Styling for GitHub-style alerts and markdown content
6. **`toc-indicator.js`** - Exposed `rebuildTOC()` function for dynamic content

## 🚀 Quick Start (Simplified Workflow)

### For Content Contributors (The Easy Way! ✅)

1. **Create your markdown file** with frontmatter:
   ```markdown
   ---
   section: rdm-knowledge
   title: Your Page Title
   subtitle: Optional subti (Traditional Approach)

For pages that need custom HTML structure, you can still use the traditional approach
   # Your Content Starts Here
   
   Write your content using standard markdown...
   ```

2. **Save in `pages/` folder**: Save your `.md` file (e.g., `my-topic.md`)

3. **Share the URL**: Your content is instantly accessible at:
   - `content-page.html?page=my-topic`

**That's it!** No HTML files to create or modify. No maintainer needed.

### Using the Auto-Router

The system now supports loading any markdown file using URL parameters:

**Simple filename** (from `pages/` folder):
```
content-page.html?page=data-reuse
content-page.html?page=my-new-topic
```

**Single section from markdown** (Quarto-style):
```
content-page.html?page=example-complete-guide&section=frontmatter-metadata
```

**Subfolder paths**:
```
content-page.html?md=DataStorage/data-backup
content-page.html?md=dmp/data-management-plan
```

### Frontmatter Fields

Add these at the top of your markdown file:

```yaml
---
section: rdm-knowledge          # Section this belongs to
title: Your Page Title          # Browser tab title (auto-set)
subtitle: Optional subtitle     # Additional context
author: Your Name              # Content author
---
```

### For Website Maintainers

To add a new markdown content page or update existing content:

1. **Create/Edit HTML page**: Open or create the HTML page that should display markdown content
2. **Add required scripts** in the `<head>` section:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   ```

3. **Add scripts** before closing `</body>` tag:
   ```html
   <script src="script.js"></script>
   <script src="markdown-loader.js"></script>
   <script src="toc-indicator.js"></script>
   ```

4. **Add loader script** to specify which markdown file to load:
   ```html
   <script>
       document.addEventListener('DOMContentLoaded', function() {
           window.loadMarkdownContent('your-file-name.md');
       });
   </script>
   ```

5. **Simplify main content area** to just show a loading message:
   ```html
   <main class="main-content">
       <section id="your-page-id" class="rdm-knowledge-page">
           <div class="rdm-knowledge-card">
               <p>Loading content...</p>
           </div>
       </section>
   </main>
   ```

## ✨ Special Features

### Quarto-Style Section Linking

You can define explicit section IDs directly in markdown headings (Quarto/Pandoc style):

```markdown
## Frontmatter Metadata {#frontmatter-metadata}
## Alerts and Callouts {#alerts-callouts}
```

Then load only one section with URL parameter:

```
content-page.html?page=example-complete-guide&section=alerts-callouts
```

### Inject Sections Into Intended HTML Areas

If a page has multiple content slots, add placeholders with `data-md-section`:

```html
<div data-md-section="overview"></div>
<div data-md-section="examples"></div>
<div data-md-section="faq"></div>
```

Then load one markdown file:

```html
<script>
   window.loadMarkdownContent('my-page.md');
</script>
```

The loader automatically matches heading IDs to placeholders and injects each section into its intended slot.

### GitHub-Style Alerts

Use these to highlight important information:

```markdown
>[!TIP]
> This is a helpful tip

>[!NOTE]
> This is general information

>[!IMPORTANT]
> This is critical information (now with ❗ icon)

>[!WARNING]
> This is a warning (with ⚠️ icon)

>[!CAUTION]
> Use extreme caution
```

### Collapsible Sections

```markdown
<details>
<summary><strong>Click to expand</strong></summary>

Hidden content goes here...

</details>
```

### Automatic Features

✅ **Table of Contents** - Automatically generated from headings (H2, H3, H4)  
✅ **Scroll Animations** - Active section highlighting and smooth scrolling  
✅ **Dark Mode Support** - All content adapts to dark/light theme  
✅ **Expandable Subheadings** - TOC subsections expand/collapse automatically  
✅ **Mobile Responsive** - Works perfectly on all devices  

## 📝 Example Usage

### New Simplified Approach (Recommended ⭐)

1. Create your markdown file: `pages/my-new-topic.md`
2. Add frontmatter at the top
3. Access it at: `content-page.html?page=my-new-topic`
4. Share the URL or add it to navigation

**Example**: See it in action:
- `content-page.html?page=data-reuse`
- Or try the example: `content-page.html?md=format/markdown-with-frontmatter-example`

### Traditional Approach

**Example**: The `data-reuse.html` page loads content from `pages/data-reuse.md`

To see it in action:
1. Open `data-reuse.html` in a browser
2. The content from `data-reuse.md` will be displayed
3. Notice the TOC on the right automatically updates
4. Click on TOC items to navigate smoothly

## 🔧 Changing Content

### To change what content is displayed:

Edit the script at the bottom of your HTML file:

```htmls

### With Frontmatter (Recommended)
- **`format/markdown-with-frontmatter-example.md`** - Shows the new simplified workflow

### Traditional Template
- **`format/markdown-template.md`** - Complete template with all syntax examples

Both templates include
</script>
```

### To update existing content:

Simply edit the `.md` file in the `pages/` folder. No HTML changes needed!

## 📋 Content Template

A complete template with all syntax examples is available at:
- **`format/markdown-template.md`**

This template includes:
- All heading levels
- Text formatting (bold, italic, code, links)
- Lists (ordered and unordered)
- Tables
- Code blocks with syntax highlighting
- All alert types
- Collapsible sections
- Best practices and tips

## 🎨 Styling

All markdown content is styled to match the website's design:
- Consistent heading styles
- Proper spacing and typography
- Responsive tables
- Beautiful alerts with icons
- Smooth collapsible sections
- Dark mode support

## 🔍 Troubleshooting

### Content not loading?
- Check browser console for errors
### New Simplified Workflow
✅ **No HTML needed** - Just write markdown and share the URL  
✅ **Instant publishing** - No waiting for maintainers  
✅ **One template** - `content-page.html` works for everything  
✅ **Flexible** - Easy to reorganize content  
✅ **Standard** - Frontmatter is used by Jekyll, Hugo, and many static site generators  

### General System Benefits
✅ **Easy for Contributors** - No HTML knowledge required  
✅ **Version Control Friendly** - Markdown is plain text  
✅ **Maintainable** - Separate content from presentation  
✅ **Consistent Styling** - Automatic formatting  
- See `format/markdown-with-frontmatter-example.md` for the new workflow example

---

**Need help?** 
- **New workflow**: Check `format/markdown-with-frontmatter-example.md`
- **Traditional workflow**: Refer to `format/markdown-template.md`
- **Complete syntax**: Both templates have full examples

### Old Workflow ❌
1. Create markdown file  
2. Create or copy HTML file  
3. Manually add scripts  
4. Specify markdown filename in script  
5. Update navigation links  
6. Coordinate with maintainer  

### New Workflow ✅
1. Create markdown file with frontmatter  
2. Share URL: `content-page.html?page=filename`  
3. Done!levels)
- Verify `toc-indicator.js` is loaded after `markdown-loader.js`
- Check that headings use `#` syntax, not HTML tags

### Alerts not showing?
- Verify alert syntax: `>[!TYPE]` on first line
- Each subsequent line must start with `>`
- Supported types: TIP, NOTE, IMPORTANT, WARNING, CAUTION

## 🎯 Benefits

✅ **Easy for Contributors** - No HTML knowledge required  
✅ **Version Control Friendly** - Markdown is plain text  
✅ **Maintainable** - Separate content from presentation  
✅ **Consistent Styling** - Automatic formatting  
✅ **Full Feature Support** - All website animations work  
✅ **Quick Updates** - Edit markdown, refresh browser  

## 📚 Additional Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- See `pages/data-reuse.md` for a real-world example

---

**Need help?** Refer to `format/markdown-template.md` for complete syntax examples and best practices.
