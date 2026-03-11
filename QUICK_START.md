# Quick Reference: Adding Content to FAIRspace Cologne

## ⚡ The Fastest Way (Recommended)

1. **Create your markdown file** in the `pages/` folder:

```markdown
---
section: rdm-knowledge
title: My Amazing Topic
---

# My Amazing Topic

Your content here...
```

2. **Access your content** at:
   ```
   content-page.html?page=my-amazing-topic
   ```

3. **Done!** Share the URL or add it to navigation.

## 📋 Frontmatter Template

```yaml
---
section: rdm-knowledge          # Where this content belongs
title: Your Page Title          # Browser tab title
subtitle: Optional subtitle     # Additional info
author: Your Name              # Who wrote this
---
```

## 🔗 URL Formats

| Format | Example | Loads |
|--------|---------|-------|
| `?page=filename` | `content-page.html?page=data-reuse` | `pages/data-reuse.md` |
| `?md=path/file` | `content-page.html?md=DataStorage/data-backup` | `pages/DataStorage/data-backup.md` |

## 🎨 Alert Icons

All five alert types now have unique icons:

```markdown
>[!TIP]        → 💡 Helpful tips
>[!NOTE]       → ℹ️ General information  
>[!IMPORTANT]  → ❗ Critical information (NEW ICON!)
>[!WARNING]    → ⚠️ Warnings
>[!CAUTION]    → 🛑 Use extreme caution
```

## 📚 Examples to Learn From

- **New workflow**: `format/markdown-with-frontmatter-example.md`
- **Full syntax guide**: `format/markdown-template.md`
- **Real content**: `pages/data-reuse.md`

## 💡 Pro Tips

✅ **No HTML needed** - Just markdown  
✅ **Instant preview** - Upload and view immediately  
✅ **Any folder** - Organize in subfolders under `pages/`  
✅ **Version control** - Track changes in Git  

## 🚀 Next Steps

1. Copy a template from `format/` folder
2. Write your content
3. Save in `pages/` folder
4. Share the URL

Need more help? See [MARKDOWN_SYSTEM_README.md](MARKDOWN_SYSTEM_README.md) for complete documentation.
