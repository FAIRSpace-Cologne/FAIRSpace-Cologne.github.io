# Markdown Content System for FAIRspace Cologne Website

This system allows anyone to create content for the website using simple Markdown files, without needing direct access to edit HTML. The markdown content is automatically converted to HTML with full support for all website features, including the animated table of contents and scroll effects.

## 📁 Files Created

1. **`markdown-loader.js`** - JavaScript that loads and parses markdown files
2. **`format/markdown-template.md`** - Complete template and guide for writing content
3. **Alert styles in `style.css`** - Styling for GitHub-style alerts and markdown content
4. **Updated `toc-indicator.js`** - Exposed `rebuildTOC()` function for dynamic content
5. **Updated `rdm-knowledge.html`** - Traditional HTML content (reverted)
6. **New `data-reuse.html`** - Example page configured to load markdown content

## 🚀 How It Works

### For Content Contributors

1. **Copy the template**: Start with `format/markdown-template.md`
2. **Write your content**: Use standard markdown syntax with special features (see below)
3. **Save in `pages/` folder**: Save your `.md` file (e.g., `my-topic.md`)
4. **Send to maintainer**: The maintainer will link your file to the website

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

### GitHub-Style Alerts

Use these to highlight important information:

```markdown
>[!TIP]
> This is a helpful tip

>[!NOTE]
> This is general information

>[!IMPORTANT]
> This is critical information

>[!WARNING]
> This is a warning

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

**Current Example**: The `data-reuse.html` page loads content from `pages/data-reuse.md`

To see it in action:
1. Open `data-reuse.html` in a browser
2. The content from `data-reuse.md` will be displayed
3. Notice the TOC on the right automatically updates
4. Click on TOC items to navigate smoothly

## 🔧 Changing Content

### To change what content is displayed:

Edit the script at the bottom of your HTML file:

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Change 'data-reuse.md' to your markdown file name
        window.loadMarkdownContent('data-reuse.md');
    });
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
- Verify the markdown file exists in `pages/` folder
- Ensure `marked.js` CDN is loaded
- Check filename spelling in `loadMarkdownContent()` call

### TOC not updating?
- Ensure headings have proper hierarchy (don't skip levels)
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
