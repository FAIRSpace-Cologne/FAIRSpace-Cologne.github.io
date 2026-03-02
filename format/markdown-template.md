# Markdown Content Template

This template shows you how to write content for the FAIRspace Cologne website using Markdown. Simply copy this template, write your content, save it in the `pages/` folder, and it will be automatically rendered with all the website's animations and table of contents features.

---

## How to Use This Template

1. **Copy this file** and rename it to describe your content (e.g., `my-topic.md`)
2. **Save it in the `pages/` folder** of the website
3. **Edit the content** using the formatting examples below
4. **Reference it in the HTML file** by adding the markdown file name to the page configuration

---

## Markdown Syntax Guide

### Headings

Use `#` symbols for headings. The number of `#` determines the heading level:

```markdown
# Main Title (H1) - Use once at the top of your page
## Section Title (H2) - Major sections
### Subsection (H3) - Subsections within sections
#### Sub-subsection (H4) - Further subdivisions
```

**Important**: Headings automatically appear in the Table of Contents (TOC) on the right sidebar!

---

### Text Formatting

- **Bold text**: `**bold text**` or `__bold text__`
- *Italic text*: `*italic text*` or `_italic text_`
- `Inline code`: `` `code` ``
- ~~Strikethrough~~: `~~strikethrough~~`

---

### Links

Create links using this format: `[Link text](URL)`

Examples:
- External link: `[FAIRsharing](https://fairsharing.org)`
- Internal page link: `[About Us](about.html)`
- Anchor link (to heading on same page): `[Jump to section](#section-title)`

---

### Lists

**Unordered lists** (bullets):
```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

**Ordered lists** (numbered):
```markdown
1. First item
2. Second item
3. Third item
```

---

### Code Blocks

For code snippets, use triple backticks:

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

You can specify the language after the first three backticks for syntax highlighting.

---

### Alerts and Callouts

The website supports special GitHub-style alerts to highlight important information:

#### Tip Alert
```markdown
>[!TIP]
> This is a helpful tip for users.
> You can have multiple lines in an alert.
> Just start each line with `>`.
```

>[!TIP]
> This is a helpful tip for users.
> You can have multiple lines in an alert.

#### Note Alert
```markdown
>[!NOTE]
> This is general information or a note.
```

>[!NOTE]
> This is general information or a note.

#### Important Alert
```markdown
>[!IMPORTANT]
> This is critical information that users must know.
```

>[!IMPORTANT]
> This is critical information that users must know.

#### Warning Alert
```markdown
>[!WARNING]
> This is a warning about potential issues or risks.
```

>[!WARNING]
> This is a warning about potential issues or risks.

#### Caution Alert
```markdown
>[!CAUTION]
> Use this for situations requiring extreme caution.
```

>[!CAUTION]
> Use this for situations requiring extreme caution.

---

### Collapsible Sections (Details/Summary)

Create expandable sections using HTML `<details>` and `<summary>` tags:

```markdown
<details>
<summary><strong>Click to expand this section</strong></summary>

This content is hidden by default and only shows when the user clicks the summary.

You can include:
- Lists
- **Formatted text**
- Links: [Example](https://example.com)
- And any other markdown content

</details>
```

**Example:**

<details>
<summary><strong>Research data repositories</strong></summary>

There are national and international online databases that house research data.

Examples:
- [re3data.org](https://www.re3data.org): Registry of Research Data Repositories
- [FAIRsharing](https://fairsharing.org): A catalog of databases
- [DataCite](https://search.datacite.org): Metadata search for research data

</details>

---

### Tables

Create tables using pipes `|` and hyphens `-`:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

**Example:**

| Feature | Description | Status |
|---------|-------------|--------|
| TOC | Auto-generated | ✅ |
| Alerts | Supported | ✅ |
| Animations | Automatic | ✅ |

---

### Horizontal Rules

Create a horizontal line using three or more hyphens, asterisks, or underscores:

```markdown
---
```

---

### Block Quotes

Use `>` for block quotes:

```markdown
> This is a block quote.
> It can span multiple lines.
```

> This is a block quote.
> It can span multiple lines.

---

## Complete Example Structure

Here's how a typical page might be structured:

```markdown
>[!TIP]
> FAIR indicator: <code>[Reusable]()</code>
> 
> Project stage: <code>Beginning</code> || Audience: <code>Researcher</code>

# Your Page Title

Brief introduction to your topic. This appears at the very top of your content.

Key points:
1. First important point
2. Second important point
3. Third important point

---

## Table of Contents
1. [First Section](#first-section)
2. [Second Section](#second-section)
3. [Third Section](#third-section)

---

## First Section

Content for your first major section goes here.

### Subsection 1.1

More detailed content in a subsection.

>[!NOTE]
> Important note for readers about this subsection.

### Subsection 1.2

Another subsection with different content.

<details>
<summary><strong>Additional Resources</strong></summary>

- Resource 1
- Resource 2
- Resource 3

</details>

---

## Second Section

Content for your second major section.

### Subsection 2.1

Detailed information here.

---

## Third Section

Final section content.

>[!IMPORTANT]
> Critical information that readers should pay attention to.

---

#### Authors
Your Name

#### License
This page is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)

#### Last updated
2026.02.16

#### References
1. Reference 1
2. Reference 2

#### Helpful Links
1. [Link 1](https://example.com)
2. [Link 2](https://example.com)
```

---

## Best Practices

1. **Use clear, descriptive headings** - They become your TOC navigation
2. **Keep heading hierarchy logical** - Don't skip levels (e.g., H2 → H4)
3. **Use alerts sparingly** - Only for truly important information
4. **Add metadata at the end** - Include authors, license, dates, references
5. **Test your links** - Make sure all links work correctly
6. **Use code blocks for technical content** - Specify the language for syntax highlighting
7. **Break up long content** - Use collapsible sections for detailed or optional information

---

## Metadata Section Template

Always include metadata at the end of your document:

```markdown
---

#### Authors
[Your Name]

#### License
This page is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)

#### Last updated
[YYYY.MM.DD]

#### References
1. [Reference citation]
2. [Reference citation]

#### Helpful Links
1. [Link title](URL)
2. [Link title](URL)
```

---

## Need Help?

- Check the existing markdown files in the `pages/` folder for examples
- Look at `pages/data-reuse.md` for a comprehensive example
- Contact the FAIRspace Cologne team if you have questions

---

**Happy writing! 📝**
