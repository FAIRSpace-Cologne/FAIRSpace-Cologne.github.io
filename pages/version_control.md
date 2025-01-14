>[!TIP]
> FAIR indicator: <code>[Findable]()</code>, <code>[Reusable]()</code>
> 
> Project stage: <code>Planning</code>  || Audience: <code>PI</code>, <code>Researcher</code>, <code>PhD</code>

# Version Control

## Table of Contents

- [Version Control](#version-control)
  - [What is Version Control?](#what-is-version-control)
  - [Do I need to use version control for my project?](#do-i-need-to-use-version-control-for-my-project)
  - [How can I go about implementing version control?](#how-can-i-go-about-implementing-version-control)
  - [Simple Version Management](#simple-version-management)
  - [Version Control Table / Version History](#version-control-table--version-history)
  - [Version Control Software](#version-control-software)
  - [Summary: Best Practices for Versioning](#summary-best-practices-for-versioning)
  - [Appendix](#authors)

### What is Version Control?

In research, data files often evolve over time as they are reprocessed, corrected, expanded, or merged with new data. Managing multiple versions of your data files is essential to FAIR research data management

Data versioning, also known as version control, is a critical aspect of effective research data management. It ensures that dynamic data—data that changes over time—is properly tracked, making it easier to understand how and why a data file has changed.

By systematically organizing and documenting different versions of your data, you can:
- Avoid confusion over which version of a dataset is the most recent or relevant.
- Recover previous versions in case of errors or unintended changes
- Maintain a clear history of modifications for reproducibility and accountability.

> [!Important]
> - You should always keep original versions of data files, or keep documentation that allows the reconstruction of original files.
> - A version control system should be selected and agreed upon by the entire team at the start of the project. Choose the system that best suits your project’s needs, and document it clearly so collaborators, coworkers, and other users of your data can easily understand and adopt it.
> - Adopting data versioning practices is a fundamental step toward ensuring your research data is reliable, transparent, reproducable, and ready for future reuse or sharing.

---
### Do I need to use version control for my project?

Consider the following questions for your project:
1. Do you need to collaborate on files, possibly simultaneously?
2. Is it important to backtrack and restore previous versions?
3. Will the file undergo frequent updates?

If the answer is yes to any of the questions above, you should carry-on reading and decide which version control method would work best for your project needs.

---

### How can I go about implementing version control?

There are various ways to implement version control, each suited to different project needs. Select the approach that aligns best with your specific use case:

**Simple Version Control**  
- **Date in File Name:** Include the date in the file name (e.g., `HealthTest-2008-04-06`).  
  <details>
  <summary><strong>Use Case</strong></summary>
  Useful for small projects or personal files where tracking changes by date is sufficient. Examples include quick notes, drafts, or single-user documents.
  </details>  
- **Version Numbers:** Use version numbers in file names (e.g., `HealthTest_v2`).  
  <details>
  <summary><strong>Use Case</strong></summary>
  Best for projects with incremental updates. Examples include design files, project proposals, or single-user coding projects.
  </details>  

**Advanced Version Control**  
- **Version History or Tables:** Record changes, dates, authors, and notes directly in the file or a dedicated table.  
  <details>
  <summary><strong>Use Case</strong></summary>
  Ideal for documents requiring detailed tracking of edits, such as reports, research papers, or collaborative projects.
  </details>  
- **Specific Versioning Tools:** Use tools like [GitHub](https://github.com) for structured version management.  
  <details>
  <summary><strong>Use Case</strong></summary>
  Best for coding projects, software development, or any work requiring collaboration and detailed version logs.
  </details>  
- **File-Sharing Platforms:** Platforms like [Dropbox](https://www.dropbox.com) and [Google Docs](https://docs.google.com) offer built-in version control.  
  <details>
  <summary><strong>Use Case</strong></summary>
  Suitable for slides, text documents, spreadsheets, or collaborative writing and presentations.
  </details>  
- **Software Features:** Leverage pre-built version control options provided by the software you are using, like MS Word.  
  <details>
  <summary><strong>Use Case</strong></summary>
  Great for managing changes in text-heavy documents, legal contracts, or large reports.
  </details> 

>[!Note]
>The following are some key points for implementing version control for your project:
>- **Version Retention & Organization**: Decide how many versions to keep, which ones to retain, and for how long. Focus on milestone versions, such as major versions (e.g., version 02-00) and avoid keeping minor revisions (e.g., version 02-01).
>- **Unique Identification**: Use a systematic naming convention (e.g., version numbers or dates) to clearly differentiate versions.
>- **Change Documentation**: Record the changes made to a file whenever a new version is created.
>- **File Relationships**: Track relationships between files, such as between code and data files, or between data files and their documentation or metadata.
>- **File Storage & Synchronization**: Ensure all files are stored in identifiable locations. Regularly synchronize files across different locations using tools like MS SyncToy.
>- **Centralized Storage**: Store milestone and master versions in a single location to maintain consistency.

---

### Simple Version Management

**[File Naming Conventions](DataStorage/file-naming-conventions.md)**

A simple method consists of numbering each version, regardless of the changes, by adding a suffix in the filename of the document. The suffix should consist of ordinal numbers (v1.0, v2.0, v3.0) for major revisions and decimals for minor changes (v1.1, v1.2, v2.1, v2.2). In addition to the version number, the suffix could contain the date, the status of the document, and/or reviewer initials.

This method goes a long way: just include a version number, date, and/or reviewer initials to know what you need to:

- `filename_v03.pdf` is the third major version of a file.
- `filename_v02-01.pdf` is the first minor revision of version 2.
- `filename_20191117.pdf` is the version dated November 17, 2019.
- `filename_js.pdf` was revised or commented on by John Smith.

You can of course mix and match: `filename_v02-01_js.pdf` contains John's changes on version 2.01 of the file.

For more information, see [File Naming Conventions Page](DataStorage/file-naming-conventions.md)

---

### Version Control Table / Version History

A good file naming convention shows that there are different versions, but it doesn't explain the differences between them. Using a version control table makes it clear **who** did **what** changes and **when**.
This makes it easier to track and recover content that was deleted or changed in earlier versions.

<blockquote>
<details>
<summary>Example of a Version Control Table</summary>

| Version  | Date       | Changes/Comments                                 | Author           | Status      |
|----------|------------|--------------------------------------------------|------------------|-------------|
| v1.0     | 2025-01-01 | Initial release                                  | John Smith       | Final       |
| v1.1     | 2025-01-05 | Minor edits to section 3.2                       | Sarah Johnson    | Draft       |
| v2.0     | 2025-01-10 | Major revision, added new section on methodology | Michael Lee      | Final       |
| v2.1     | 2025-01-12 | Minor revisions to the conclusion and references | Sarah Johnson    | Draft       |
| v2.2     | 2025-01-13 | Final review and cleanup of formatting           | John Smith       | Final       |

</details>
</blockquote>


> [!Note]
>  Where should I store the version control table?
> 
> You can store the version history directly in the file (in headings, notes, or metadata), or maintain it as an attached spreadsheet or README file. Typically, it should be placed on the first page of the data file.

---

### Version Control Software

Version control software helps manage and track changes in files, making collaboration and versioning efficient and reliable. These tools are essential for projects where multiple users work on the same files or where maintaining a history of changes is critical.

Key Features of Version Control Software
- **Change Tracking**: Automatically tracks every modification, allowing you to view or revert to previous versions.
- **Collaboration**: Enables multiple users to work on the same project simultaneously without overwriting each other's work.
- **Branching and Merging**: Allows you to create branches for experimentation or parallel development, which can later be merged into the main version.
- **History Logs**: Maintains detailed logs of changes, including dates, authors, and commit messages.

Popular version control tools:
1. [**Git**](https://git-scm.com/): A widely used distributed version control system known for its speed, flexibility, and support for branching.  
2. [**Subversion (SVN)**](https://subversion.apache.org/): A centralized version control system ideal for projects that require structured workflows.  
3. [**Mercurial**](https://www.mercurial-scm.org/): A user-friendly distributed version control system designed for performance and scalability.  
4. [**Perforce**](https://www.perforce.com/products/helix-core): A version control system for large-scale development with strong support for binary files and enterprise needs.  

For most modern projects, [**Git**](https://git-scm.com/) is the preferred choice, with hosting platforms like [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), and [Bitbucket](https://bitbucket.org/) further enhancing its capabilities.

---

### Summary: Best Practices for Versioning

- **Raw Data Preservation**: Always keep an untouched version of the raw data file. Ensure it is protected from changes (e.g., make it read-only, store it in a secure location, or restrict access permissions).
  
- **Work on Copies**: Keep the original raw data intact. Work on copies of the data for any processing or modifications, allowing you to always revert to the original data if needed.
  
- **Maintain Previous Versions**: Retain previous versions of your files to track changes over time. At a minimum, save milestone versions where substantial updates occurred.
  
- **Version Naming Strategy**: Implement a clear naming convention for different versions of your files, such as including a version number (e.g., v01, v02, v03) in the file name.
  
- **Consistency in Naming**: Use consistent naming patterns for file versions to avoid confusion.
  
- **Avoid Ambiguous Labels**: Refrain from using unclear version labels like '_new', '_lastversion', '_final', etc. If possible, use built-in version control tools within your software.
  
- **Version Control Software**: Consider using version control systems like Git for managing file versions when applicable.
  
- **Date Recording**: Include the date in your file names to track versions (e.g., 20190902_documentation_for_my_data).
  
- **Version Control Table**: Create and maintain a version control table to track changes and versions systematically.
  
- **Document Changes**: Keep a record of the changes made to each version of the file.
  
- **Version Retention Policy**: Decide on the number of versions to retain, which specific versions to save, how long to keep them, and how to organize them.

---

#### Authors  
Ahmad Abu Dayeh  

#### License  
CC0 1.0 [Link](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)

#### Last Updated  
2024.10.13

#### References

#### Helpful Links
