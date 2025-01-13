>[!TIP]
> FAIR indicator: <code>[Findable]()</code>, <code>[Reusable]()</code>
> 
> Project stage: <code>Beginning</code>  || Audience: <code>PI</code>, <code>Researcher</code>, <code>PhD</code>

# How To Write A README File

### What is a README file?

It provides a clear and concise description of the files in the folder and all relevant information that you at a later date or researchers from another institute could correctly interpret the files and enhance the [reproducibility]().

README file is created to answer various questions, for example:

 - Where to [find]() a specific dataset?
 
 - Which file has been updated? What is the nature of the update?
 
 - What is the naming convention for this dataset?
 
 - Why is a certain practice/model applied?


It is recommended to create the README file at the beginning of your research project and regularly update it throughout the research project.

>[!IMPORTANT]
>Check your READEME files before publishing the data. Make sure the information is correct and up-to-date.

### Where should I place the README file?

It could be at a higher-level directory, for example:

<pre>
 Project_A
   |- README_Data.txt
   |- Raw Data
   |- Processed Data
   |- Reference Data
   |- Analysis
</pre>

In this README file, it could describe the content in each folder, the research objectives, required information for the intepretation and [reuse]() of the data, who to contact for questions and so on.

You could also create a README file for a lower-level directory, for example:

<pre>
 Project_A
   |- Data
   |   |- Raw Data
   |   |   |- README_rawData.txt
   |   |   |- Dataset_1-1.xml
   |   |   |- Dataset_2-1.csv
   |   |   |- Dataset_2-2.csv
</pre>

This README file could contain the naming convention, definition of symbols and codes in the dataset, list of variables, units for measurement, locations for data generation/collection, collabortors, who to contact for questions and so on. 

>[!NOTE]
> Add details to the name of README file, _e.g. README_rawData.txt, README_analysis.txt_

### Creating README file template

For a project with various datasets, you could create a README template for each folder with different type of dataset. 

Or your could use the template in different projects.

The recommended minimum content for enhancing [reproducibility]() is <mark>highlighted</mark>. 

<details>
 <summary> <b>What can be included in a README file</b> </summary>
<blockquote> 
<details>
  <summary> <b> General information </b> </summary>

  1. <mark>Title of the dataset</mark> 
  
  2. <mark>Name/institute/contact information for the principal investigator or person who could answer questions</mark>
  
  3. <mark>Date (of creation, collection or update. Could be a single date or a range)</mark>
  
  4. <mark>The content of each folder or a list of files in this folder</mark>
  
  5. A description of the folder structure or relationship between files

</details>

<details>
  <summary> <b> Data-specific information </b> </summary>

  1. Number of variables, count of rows in each dataset
  
  2. <mark>List of variables (full name and a brief description of the variable)</mark> 

  3. <mark>Date that the dataset created or collected</mark>
  
  4. <mark>Units of measurement</mark>
  
  5. <mark>Definition of symbols and codes (i.e. this code is used to record missing values)</mark>

</details>

<details>
  <summary> <b> Methodological information </b> </summary>

  1. <mark>Description of the methods used for data collection, generation or processing</mark> (could include links or references to publications or experimental designs)
  
  2. <mark>Software or instrument specifics</mark> (i.e. software version, machine serial number)
  
  3. Applied standards (i.e. ISO)
  
  4. Quality assurance procedures
  
  5. Definition of symbols and codes (i.e. this symbol is used for indicating outliers)
  
  6. Collaborators (i.e. people who involved with data collection, processing or/and analysis)

</details>

<details>
  <summary> <b> Other information </b> </summary>

  1. Data licenses or restrictions to re-use the data
  
  2. Links to cited publications
  
  3. Links to other publicly accessible locations of the data
  
  4. Recommended citation for the data
</details>
</blockquote>
</details>

>[!IMPORTANT]
>README file should be customized based on how your dataset look like and where you place the README file.

[Example - Project-level README file]()

[Example - Data-level README file](readme-data-level-example.html)

### README file templates

[Template - Project-level README file](readme-project-level-template.html)

[Template - Data-level README file](readme-data-level-template.html)

<br>

---


  #### Authors
  Yu-Ting Fu

  #### License
  This page is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)
  
  #### Last updated 
  2024.09.06
  
  #### References:
  
  1. [HMS RDM - 2024 Webinar - Closing Out Your Research: Managing Data Transfer Between Collaborators](https://www.youtube.com/watch?v=JZNShVSS7Jc)
 
  
  2. [HMS RDM - 2024 Webinar - Achieving FAIR Data: Selecting a Repository for Your Data](https://www.youtube.com/watch?v=vIWrRnbU3Jo)
  
  3. [CDS - Guide to writing “readme” style metadata](https://data.research.cornell.edu/data-management/sharing/readme/)

  4. [HMS RDM - Data Documentation: Writing Better READMEs](https://www.youtube.com/watch?v=M-tVCFhHtEg&list=PLWIsV2soJK-VaW7IhxYyyOwiamjVV_FuB&index=16)

