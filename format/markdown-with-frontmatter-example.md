---
section: rdm-knowledge
title: Example Page with Frontmatter
subtitle: Demonstrates the new simplified workflow
author: FAIRspace Team
---

# Example Page with Frontmatter

This is an example markdown file that demonstrates the new simplified workflow for adding content to FAIRspace Cologne.

## What's New?

The new system includes:

1. **Frontmatter Support** - Add metadata at the top of your markdown files
2. **Auto-Routing** - Load content using URL parameters
3. **Generic Template** - Use the same HTML file for all markdown content
4. **Automatic Page Titles** - Page titles are set from frontmatter

## How to Use Frontmatter

Add this at the very top of your markdown file:

```yaml
---
section: rdm-knowledge
title: Your Page Title
subtitle: Optional subtitle
author: Your Name
---
```

### Supported Frontmatter Fields

- **section**: The section this content belongs to (e.g., rdm-knowledge, user-guidelines, news)
- **title**: The page title (will be set as the browser tab title)
- **subtitle**: An optional subtitle
- **author**: The content author

## Simplified Workflow

### Old Workflow ❌

1. Create a markdown file
2. Create a new HTML file or copy an existing one
3. Manually add scripts to load the markdown
4. Specify the markdown filename in the script
5. Update navigation links

### New Workflow ✅

1. Create a markdown file with frontmatter in `pages/` directory
2. Use the generic template: `content-page.html?page=your-filename`
3. Done! The system handles everything else automatically

## Example URLs

- `content-page.html?page=data-reuse` - Loads pages/data-reuse.md
- `content-page.html?md=DataStorage/data-backup` - Loads pages/DataStorage/data-backup.md

>[!TIP]
> You can bookmark these URLs or add them to your navigation menu!

>[!IMPORTANT]
> Note that IMPORTANT now has a different icon (❗) than WARNING (⚠️)

>[!WARNING]
> This is what the WARNING icon looks like now

## GitHub-Style Alerts Still Work

All the existing GitHub-style alerts continue to work:

>[!NOTE]
> This is a note with useful information

>[!CAUTION]
> This is a caution message

## Benefits

✅ **Simpler for content creators** - Just write markdown and upload  
✅ **Less maintenance** - One HTML template instead of many  
✅ **Flexible** - Easy to reorganize content  
✅ **Standard** - Frontmatter is a common pattern (Jekyll, Hugo, etc.)  

## Next Steps

See the updated documentation in `MARKDOWN_SYSTEM_README.md` for complete details!
