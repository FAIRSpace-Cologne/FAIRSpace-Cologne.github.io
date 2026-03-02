>[!TIP]
> FAIR indicator: <code>[Findable]()</code>, <code>[Accessible]()</code>, <code>[Interoperable]()</code>, <code>[Reusable]()</code>
>
> Project stage: <code>Intermediate</code> || Audience: <code>All</code>

# Markdown Content Features Guide

This page demonstrates all available markdown features for creating RDM Knowledge content. Each section showcases different formatting capabilities you can use in your documentation.

---

## Text Formatting

Text can be formatted in many ways: **bold text** for emphasis, *italic text* for subtle emphasis, ***bold and italic*** for strong emphasis, `inline code` for technical terms, and ~~strikethrough~~ for deprecated information.

You can also use <mark>highlighted text</mark> for important terms, <strong>strong emphasis</strong> for critical points, and <em>emphasized text</em> for nuanced meaning.

---

## Headings Structure

The following sections demonstrate the heading hierarchy available on this platform.

### This is a Level 3 Heading

Content under a subsection provides detailed information about specific topics.

#### This is a Level 4 Heading

Even more specific content can be organized under level 4 headings.

##### This is a Level 5 Heading

For highly detailed documentation, level 5 headings are available.

###### This is a Level 6 Heading

The smallest heading level for granular content organization.

---

## Lists

### Data Management Plan Components

- Data collection methodology
- Storage infrastructure requirements
  - Primary storage location
  - Backup storage location
    - Off-site backup strategy
    - Cloud redundancy options
  - Access control protocols
- Metadata documentation standards
- Data sharing policies

### Research Project Workflow

1. Planning phase
   - Define research questions
   - Identify required datasets
2. Data collection
   1. Design collection protocols
   2. Validate data quality
3. Analysis and documentation
   - Process raw data
   - Generate visualizations
   - Document findings
4. Publication and archival

### RDM Best Practices

1. Create comprehensive data management plans
   - Document all data sources
   - Specify file formats and naming conventions
   - Define retention policies
2. Implement version control
   - Track all changes systematically
   - Maintain changelog documentation
   - Archive significant versions
3. Ensure data security and privacy
   - Encrypt sensitive information
   - Control access permissions
   - Comply with regulations

---

## Links

External resources such as [FAIRsharing.org](https://fairsharing.org/) provide valuable information about data standards. You can navigate to other pages like [Data Repositories](data-repositories.html) or [Data Security](data-security.html) for related topics.

Internal navigation is seamless: [jump to the Tables section](#tables) to see tabular data examples, or explore [Alerts and Callouts](#alerts-and-callouts) for highlighting important information.

For comprehensive metadata standards, visit [Dublin Core Metadata Initiative](https://www.dublincore.org/ "International metadata standards organization").

---

## Code Snippets

Data processing scripts are essential for reproducible research. The following examples demonstrate common research workflows:

```python
def process_data(filename):
    """
    Load and process research data
    """
    import pandas as pd
    df = pd.read_csv(filename)
    df.dropna(inplace=True)
    return df
```

Shell scripts automate repetitive tasks:

```bash
# Run a bash script for data organization
mkdir -p data/processed
cp data/raw/*.csv data/processed/
echo "Data copied successfully"
```

JavaScript functions can enhance web-based data tools:

```javascript
// Generate unique identifiers for datasets
function generateId(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}
```

Database queries extract specific information:

```sql
-- SQL example for dataset retrieval
SELECT dataset_id, project_name, created_date
FROM datasets
WHERE created_date > '2023-01-01'
ORDER BY created_date DESC;
```

XML metadata structures standardize data description:

```xml
<!-- XML metadata example -->
<metadata>
    <dataset>
        <title>Research Dataset</title>
        <creator>John Doe</creator>
        <datePublished>2024-03-01</datePublished>
    </dataset>
</metadata>
```

Project organization follows standard directory structures:

```
project-folder/
├── data/
│   ├── raw/
│   │   ├── dataset_01.csv
│   │   └── dataset_02.csv
│   └── processed/
│       └── cleaned_data.csv
├── scripts/
│   ├── data_processing.py
│   └── analysis.py
├── results/
│   ├── figures/
│   └── tables/
└── README.md
```

---

## Images

Visual elements enhance documentation and provide institutional context:

<img src="images/UzK_Logo_ENG.png" alt="University of Cologne Logo" width="500" style="margin: 1rem 0; border-radius: 8px; height: auto;">

---

## Alerts and Callouts

>[!TIP]
> When documenting your research, include as much context as possible. This helps future users understand your work better and enables proper reuse of your data.

>[!NOTE]
> All headings you add to your markdown files automatically appear in the Table of Contents on the right side of the page.

>[!IMPORTANT]
> Always back up your research data in multiple locations. Data loss can be catastrophic to your research project and may result in irreversible setbacks.

>[!WARNING]
> Sharing sensitive data without proper anonymization can violate privacy regulations and institutional policies. Always consult with your data protection officer before publishing.

>[!CAUTION]
> Deleting data files without a backup copy is irreversible. Triple-check before removing any research data permanently.

---

## Collapsible Sections

<details>
<summary><strong>File Naming Best Practices</strong></summary>

Proper file naming helps organize your research data and makes it easier to find and reuse files later.

**Guidelines:**
1. Use descriptive, meaningful names
2. Include date in format: YYYY-MM-DD
3. Avoid spaces; use underscores or hyphens instead
4. Use lowercase letters
5. Keep names concise but informative

**Examples:**
```
2024-03-01_experiment_trial-01_raw-data.csv
2024-03-01_experiment_trial-01_cleaned-data.csv
2024-03-02_analysis_results_figure-01.png
```

</details>

<details>
<summary><strong>Data Repository Comparison</strong></summary>

| Repository | Cost | File Limit | Format Support | License |
|-----------|------|-----------|-----------------|---------|
| Zenodo | Free | 50 GB/dataset | All formats | Creative Commons |
| OSF | Free | Unlimited | All formats | Multiple |
| Dryad | $120/dataset | 300 GB | All formats | CC0/CC-BY |
| figshare | Free | 20 GB/file | All formats | Various |

</details>

<details>
<summary><strong>Metadata Standard Selection Guide</strong></summary>

Different research domains benefit from domain-specific metadata standards:

- **Life Sciences**: Darwin Core, EML (Ecological Metadata Language)
- **Social Sciences**: DDI (Data Documentation Initiative)
- **Geospatial**: ISO 19115, FGDC
- **General**: Dublin Core, DataCite

**Key Considerations:**
- Community adoption within your field
- Compatibility with repositories
- Complexity vs. completeness trade-offs
- Long-term sustainability of the standard

</details>

---

## Blockquotes

> Research data management ensures the long-term preservation and accessibility of research outputs, making them available for future verification and reuse.
> 
> — FAIRspace Cologne Initiative

> The FAIR principles are not a standard, but rather a set of guiding principles to make data findable, accessible, interoperable, and reusable. Implementation may vary across different domains and communities.
> 
> — Wilkinson et al., 2016

---

## Tables

### Data Types and Recommended Formats

| Data Type | Recommended Format | Alternative Format | Preservation Format |
|-----------|-------------------|-------------------|---------------------|
| Tabular Data | CSV | XLSX | CSV |
| Images | TIFF | PNG, JPEG | TIFF |
| Text Documents | PDF/A | DOCX | PDF/A |
| Geospatial | GeoTIFF | Shapefile | GeoTIFF |
| 3D Models | OBJ | STL | OBJ |

### FAIR Principles Overview

| Principle | Description | Implementation Examples |
|-----------|-------------|------------------------|
| **Findable** | Data is easy to find for both humans and computers | Use persistent identifiers (DOI), rich metadata, indexed in searchable resources |
| **Accessible** | Data can be retrieved using standard protocols | Open repositories, clear access procedures, authentication when necessary |
| **Interoperable** | Data works with other data and applications | Standard formats, controlled vocabularies, qualified references |
| **Reusable** | Data can be used in future research | Clear licensing, provenance information, domain-relevant standards |

### Storage Solution Comparison

| Feature | Cloud Storage | Network Drive | External HDD |
|:--------|:-------------:|:-------------:|:------------:|
| Accessibility | High | Medium | Low |
| Collaboration | Excellent | Good | Poor |
| Cost | Variable | Low | One-time |
| Backup | Automatic | Manual | Manual |
| Security | High | Medium | Low |

---

## Horizontal Rules

The following horizontal rule separates major content sections:

---

And another one for visual clarity:

---

## Combining Features

### Data Security Implementation Strategy

>[!IMPORTANT]
> Data security is not optional. Every research project must implement proper security measures from the beginning to protect sensitive information and maintain research integrity.

**Essential Security Measures:**

1. **Data Assessment and Classification**
   - Identify all data types in your project
   - Classify data by sensitivity level
   - Document data flows and storage locations
   - Determine applicable regulations (GDPR, HIPAA, etc.)

2. **Security Infrastructure**
   - Implement encryption for data at rest and in transit
   - Configure role-based access controls
   - Enable multi-factor authentication
   - Maintain detailed audit logs

3. **Ongoing Maintenance**
   - Conduct quarterly security audits
   - Review and update access permissions monthly
   - Train team members on security protocols
   - Test disaster recovery procedures regularly

<details>
<summary><strong>Python Encryption Implementation Example</strong></summary>

```python
# Example: Simple data encryption workflow
from cryptography.fernet import Fernet
import os

# Generate and store encryption key securely
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt sensitive data
sensitive_data = b"Patient ID: 12345, Treatment: XYZ"
encrypted_data = cipher.encrypt(sensitive_data)

# Store encrypted data
with open('encrypted_data.bin', 'wb') as f:
    f.write(encrypted_data)

# Later: Decrypt when needed
with open('encrypted_data.bin', 'rb') as f:
    stored_encrypted = f.read()
    
decrypted_data = cipher.decrypt(stored_encrypted)
print(decrypted_data.decode())
```

**Additional Resources:**
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [Data Security Guidelines](data-security.html)
- [Encryption Best Practices](https://csrc.nist.gov/publications)

</details>

### Research Workflow Checklist

- [x] Data management plan created and approved
- [x] Storage infrastructure configured
- [x] Backup procedures tested
- [ ] Metadata schema finalized
- [ ] Data collection protocols validated
- [ ] Quality control measures implemented
- [ ] Documentation templates prepared

---

## Summary

This page demonstrates **text formatting**, different heading levels, various list types (bulleted, numbered, nested), hyperlinks (external and internal), code snippets in multiple languages, images, alert boxes (tip, note, important, warning, caution), collapsible sections, blockquotes, tables with different alignments, and horizontal dividers.

All features work together to create comprehensive, well-organized documentation for research data management.

---

#### Authors
FAIRspace Cologne Team

#### License
This page is marked under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

#### Last updated
March 2, 2026

#### References
- Wilkinson, M. D. et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3:160018.
- [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)

#### Helpful Links
- [Data Repository Guide](data-repositories.html)
- [Data Security](data-security.html)
- [RDM Knowledge](rdm-knowledge.html)
- [Research Software and Tools](research-software.html)

#### References
- [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)
- [Commonmark Specification](https://spec.commonmark.org/)

#### Helpful links
- [Data Repository Guide](data-repositories.html)
- [Data Security](data-security.html)
- [RDM Knowledge](rdm-knowledge.html)
