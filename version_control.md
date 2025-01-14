>[!TIP]
> FAIR indicator: <code>[Findable]()</code>, <code>[Reusable]()</code>
> 
> Project stage: <code>Planning</code>  || Audience: <code>PI</code>, <code>Researcher</code>, <code>PhD</code>

# Version Control

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

[Simple Version Control](#Simple-Version-Management)
- Date in File Name: Include the date in the file name (e.g., HealthTest-2008-04-06).
- Version Numbers: Use version numbers in file names (e.g., HealthTest_v2).

[Advanced Version Control](#Advance-Version-Control)
- Version History or Tables: Record changes, dates, authors, and notes directly in the file or a dedicated table.
- Versioning Tools: Use tools like GitHub for structured version management.
- File-Sharing Platforms: Platforms like Dropbox and Google Docs offer built-in version control.
- Software Features: Leverage pre-built version control options provided by your software.

>[!Note]
>The following are some key points for implementing version control for your project:
>- Version Retention & Organization: Decide how many versions to keep, which ones to retain, and for how long. Focus on milestone versions, such as major versions (e.g., version 02-00) and avoid keeping minor revisions (e.g., version 02-01).
>- Unique Identification: Use a systematic naming convention (e.g., version numbers or dates) to clearly differentiate versions.
>- Change Documentation: Record the changes made to a file whenever a new version is created.
>- File Relationships: Track relationships between files, such as between code and data files, or between data files and their documentation or metadata.
>- File Storage & Synchronization: Ensure all files are stored in identifiable locations. Regularly synchronize files across different locations using tools like MS SyncToy.
>- Centralized Storage: Store milestone and master versions in a single location to maintain consistency.

---

### Simple Version Management

[File Naming Conventions](DataStorage/file-naming-conventions.md):

A simple method consists of numbering each version, regardless of the changes, by adding a suffix in the filename of the document. The suffix should consist of ordinal numbers (v1.0, v2.0, v3.0) for major revisions and decimals for minor changes (v1.1, v1.2, v2.1, v2.2). In addition to the version number, the suffix could contain the date, the status of the document, and/or reviewer initials.

This method goes a long way: just include a version number, date, and/or reviewer initials to know what you need to:

- `filename_v03.pdf` (no single digits!) is the third major version of a file.
- `filename_v02-01.pdf` is the first minor revision of version 2.
- `filename_20191117.pdf` is the version dated November 17, 2019.
- `filename_js.pdf` was revised or commented on by John Smith.

You can of course mix and match: `filename_v02-01_js.pdf` contains John's changes on version 2.01 of the file.

For more information, see [File Naming Conventions Page](DataStorage/file-naming-conventions.md)

---

### Advanced Version Control

Version Control Table / Version History:

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
> You can store the version history directly in the file (in headings, notes, or metadata), or maintain it as an attached spreadsheet or README file. Typically, it should be placed on the first page of the data file.

---






#### Authors  
Ahmad Abu Dayeh  

#### License  
CC0 1.0 [Link](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)

#### Last Updated  
2024.10.13

#### References
1. [IBM: What is a data management plan (DMP)?](https://www.ibm.com/topics/data-management-plan)
2. [Harvard: Data Management Plans](https://datamanagement.hms.harvard.edu/plan-design/data-management-plans)

#### Helpful Links
