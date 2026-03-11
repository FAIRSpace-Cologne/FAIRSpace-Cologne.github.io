---
section: rdm-knowledge
title: Complete Feature Demonstration
subtitle: A practical example showing all markdown features
author: FAIRspace Team
---

# Welcome to the New Simplified Content System! 🎉

This page demonstrates **all the features** you can use when creating content for FAIRspace Cologne. The best part? This entire page was created with just this one markdown file - no HTML coding required!

## How This Page Was Created

1. Created this file: `pages/example-complete-guide.md`
2. Added frontmatter metadata at the top (see the raw file)
3. Accessed it at: `content-page.html?page=example-complete-guide`

**That's it!** Three simple steps and your content is live on the website.

---

## 📝 Frontmatter Metadata {#frontmatter-metadata}

Every markdown file can start with frontmatter (the section between `---` markers):

```yaml
---
section: rdm-knowledge
title: Complete Feature Demonstration
subtitle: A practical example showing all markdown features
author: FAIRspace Team
---
```

This metadata:
- ✅ Sets the browser tab title automatically
- ✅ Identifies which section the content belongs to
- ✅ Provides authorship information
- ✅ Adds optional subtitles for context

---

## 🎨 All Five Alert Types (with Unique Icons!) {#alerts-callouts}

### TIP Alert (💡)

>[!TIP]
> Use TIP alerts for helpful suggestions and best practices.
> They're great for sharing pro tips and recommendations!

### NOTE Alert (ℹ️)

>[!NOTE]
> NOTE alerts are perfect for general information that readers should be aware of.
> Use them for neutral, informative content.

### IMPORTANT Alert (❗)

>[!IMPORTANT]
> IMPORTANT alerts highlight critical information that users must pay attention to.
> **Notice the exclamation mark icon** - it's different from WARNING now!

### WARNING Alert (⚠️)

>[!WARNING]
> WARNING alerts indicate potential problems or issues to watch out for.
> **Notice the triangle icon** - distinct from IMPORTANT!

### CAUTION Alert (🛑)

>[!CAUTION]
> CAUTION alerts are for the most serious warnings.
> Use sparingly for situations requiring extreme care.

---

## 📋 Text Formatting {#text-formatting}

You can use all standard markdown formatting:

- **Bold text** using `**double asterisks**`
- *Italic text* using `*single asterisks*`
- ***Bold and italic*** using `***triple asterisks***`
- `Inline code` using backticks
- ~~Strikethrough~~ using `~~tildes~~`

### Links

- [External link to Markdown Guide](https://www.markdownguide.org/)
- [Internal link to RDM Knowledge](rdm-knowledge.html)
- [Link to another markdown page](content-page.html?page=data-reuse)

---

## 📊 Lists {#lists}

### Unordered List

- Research Data Management
- FAIR Principles
  - Findable
  - Accessible
  - Interoperable
  - Reusable
- Data Repositories
  - Zenodo
  - DataCite
  - Institutional repositories

### Ordered List

1. Plan your research data management strategy
2. Collect and organize your data
3. Document your data with metadata
4. Share your data in a repository
5. Ensure long-term preservation

### Task List

- [x] Set up markdown system
- [x] Add frontmatter support
- [x] Fix duplicate icons
- [x] Create auto-routing
- [ ] Add more examples
- [ ] Expand documentation

---

## 📊 Tables {#tables}

Tables are automatically styled and responsive:

| Feature | Old Workflow | New Workflow |
|---------|-------------|--------------|
| HTML Knowledge | Required | Not needed |
| Steps to Publish | 5-6 steps | 1-2 steps |
| Maintainer Needed | Yes | No |
| Instant Preview | No | Yes |
| Easy Updates | No | Yes |
| URL Format | Fixed page | Dynamic parameter |

### Complex Table Example

| Alert Type | Icon | Use Case | Example |
|-----------|------|----------|---------|
| TIP | 💡 | Helpful suggestions | Best practices, shortcuts |
| NOTE | ℹ️ | General information | Background context |
| IMPORTANT | ❗ | Critical info | Must-read requirements |
| WARNING | ⚠️ | Potential issues | Common mistakes |
| CAUTION | 🛑 | Serious warnings | Data loss risks |

---

## 💻 Code Blocks

### Simple Code Block

```
This is a simple code block without syntax highlighting.
Great for plain text examples.
```

### Python Code

```python
def calculate_fair_score(dataset):
    """Calculate FAIR compliance score for a dataset."""
    findable = check_metadata(dataset)
    accessible = check_access_protocol(dataset)
    interoperable = check_standards(dataset)
    reusable = check_license(dataset)
    
    return (findable + accessible + interoperable + reusable) / 4

# Example usage
score = calculate_fair_score(my_dataset)
print(f"FAIR Score: {score:.2%}")
```

### JavaScript Code

```javascript
// Auto-load markdown content from URL parameter
function autoLoadMarkdown() {
    const urlParams = new URLSearchParams(window.location.search);
    const mdFile = urlParams.get('page');
    
    if (mdFile) {
        window.loadMarkdownContent(mdFile + '.md');
        return true;
    }
    return false;
}
```

### YAML Configuration

```yaml
# Example frontmatter for a markdown file
section: rdm-knowledge
title: My Research Topic
subtitle: A comprehensive guide
author: Dr. Jane Smith
date: 2026-03-09
tags:
  - research-data
  - FAIR-principles
  - open-science
```

### Bash/Shell Commands

```bash
# Clone the repository
git clone https://github.com/FAIRSpace-Cologne/fairspace-cologne.github.io.git

# Navigate to the pages directory
cd fairspace-cologne.github.io/pages

# Create a new markdown file
touch my-new-topic.md

# Open in your favorite editor
code my-new-topic.md
```

---

## 🔽 Collapsible Sections

<details>
<summary><strong>Click to see how to create collapsible sections</strong></summary>

Collapsible sections are great for:
- FAQs
- Additional details that might clutter the main content
- Optional advanced information
- Long code examples

**Markdown syntax:**
```markdown
<details>
<summary><strong>Your summary text here</strong></summary>

Your hidden content here...

</details>
```

You can include **any markdown** inside collapsible sections, including:
- Lists
- Code blocks
- Links
- Images
- Even other collapsible sections!

</details>

<details>
<summary><strong>Advanced Example: Nested Content</strong></summary>

### This is a heading inside a collapsible section

You can have multiple paragraphs, like this one.

And another one here.

**Code inside collapsible:**
```python
def example():
    return "This works perfectly!"
```

**Lists inside collapsible:**
1. First item
2. Second item
3. Third item

>[!TIP]
> You can even put alerts inside collapsible sections!

</details>

---

## 📐 Blockquotes

> This is a standard blockquote.
> 
> You can use it for quotes, citations, or to emphasize text.
> 
> — FAIRspace Team

> **Nested Quote:**
> 
> > "The best way to predict the future is to invent it."
> > 
> > — Alan Kay

---

## 🔢 Headings and Table of Contents

The system automatically generates a table of contents from your headings. Notice the TOC on the right side of the page! It updates as you scroll.

### Heading Level 3

Use H3 for subsections.

#### Heading Level 4

Use H4 for sub-subsections.

##### Heading Level 5

Used rarely, but available if needed.

###### Heading Level 6

The smallest heading level.

---

## ✨ Special Features

### Automatic Features You Get For Free

When you use this markdown system, you automatically get:

✅ **Responsive Design** - Works on all devices  
✅ **Dark Mode Support** - Switches with the site theme  
✅ **Scroll Animations** - Smooth scrolling and highlighting  
✅ **Interactive TOC** - Auto-generated table of contents  
✅ **Code Copy Buttons** - One-click code copying  
✅ **Mobile Friendly** - Optimized for phones and tablets  
✅ **SEO Friendly** - Proper heading structure  
✅ **Accessible** - Screen reader compatible  

### URL-Based Loading

You can link directly to any markdown content:

- `content-page.html?page=example-complete-guide` (this page)
- `content-page.html?page=data-reuse` (another example)
- `content-page.html?md=DataStorage/data-backup` (subfolder example)

---

## 🚀 Quick Start Checklist

Ready to create your own content? Here's what to do:

1. **Copy a template**
   - Use `format/markdown-template.md` for the full template
   - Or use `format/markdown-with-frontmatter-example.md` for a simpler example

2. **Add your frontmatter**
   ```yaml
   ---
   section: rdm-knowledge
   title: Your Topic Here
   ---
   ```

3. **Write your content**
   - Use headings (`#`, `##`, `###`)
   - Add alerts for important information
   - Include code blocks, lists, and tables as needed

4. **Save the file**
   - Save in `pages/` folder
   - Use lowercase and hyphens: `my-topic-name.md`

5. **Access your content**
   - Open: `content-page.html?page=my-topic-name`
   - Share the URL or add to navigation

---

## 📚 Real-World Example

This entire page is a real-world example! Here's what makes it work:

**File location:** `pages/example-complete-guide.md`  
**Access URL:** `content-page.html?page=example-complete-guide`  
**Lines of HTML code needed:** 0 (zero!)  
**Time to create:** Minutes, not hours  

Compare this to the old way:
- Create markdown file
- Create or copy HTML file (~150 lines)
- Manually configure scripts
- Test and debug
- Coordinate with maintainer

The new way? Just write markdown and go! 🎉

---

## 💡 Pro Tips

<details>
<summary><strong>Click for expert tips and tricks</strong></summary>

### Organizing Your Content

- Use clear, descriptive headings
- Keep sections focused and concise
- Use alerts strategically (don't overuse)
- Include examples and code snippets
- Add collapsible sections for optional content

### Writing Great Markdown

- Preview your content regularly
- Use consistent formatting
- Check your heading hierarchy (don't skip levels)
- Add alt text to images (when you use them)
- Test internal links

### File Naming

- Use lowercase letters
- Use hyphens for spaces: `data-management-plan.md`
- Be descriptive: `how-to-write-readme.md` not `readme.md`
- Avoid special characters

### Frontmatter Best Practices

```yaml
---
section: rdm-knowledge          # Required
title: Specific and Clear       # Required
subtitle: Additional context    # Optional but helpful
author: Your Name              # Optional
date: 2026-03-09               # Optional
---
```

</details>

---

## 🎓 Learning Resources

Want to learn more about markdown?

- [Markdown Guide](https://www.markdownguide.org/) - Complete markdown reference
- [GitHub Flavored Markdown](https://github.github.com/gfm/) - GitHub's markdown spec
- `format/markdown-template.md` - Full syntax template in this repository
- `QUICK_START.md` - Quick reference guide

---

## 🌟 Summary

This new system makes content creation for FAIRspace Cologne incredibly simple:

| Aspect | What You Need |
|--------|---------------|
| Required Knowledge | Basic markdown only |
| HTML/CSS Skills | None required |
| Tools Needed | Any text editor |
| Setup Time | Seconds |
| Publishing Process | Save file → Share URL |
| Maintenance | Edit markdown file, that's it |

### The Bottom Line

**Before:** Creating content required HTML knowledge, multiple files, and coordination with maintainers.

**Now:** Write markdown, save in `pages/` folder, share URL. Done! ✨

---

## 📞 Need Help?

- **Quick reference:** See [QUICK_START.md](QUICK_START.md)
- **Full documentation:** See [MARKDOWN_SYSTEM_README.md](MARKDOWN_SYSTEM_README.md)
- **Examples:** Check `format/markdown-template.md` and `pages/data-reuse.md`

Happy content creating! 🚀
