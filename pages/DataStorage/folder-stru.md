>[!TIP]
> FAIR indicator: <code>[Findable]()</code>
> 
> Project stage: <code>Beginning</code>  || Audience: <code>All</code>

## Why Should We Structure The Folder?

Which following project folder would you like to see?

<pre>
Project_A
 |- 1 Data
 |   |- README.txt
 |   |- 1 Raw Data 
 |   |- 2 Processed Data
 | 
 |- 2 Analysis
</pre>

<pre>
Project_B
 |- dataset_copy.json
 |- DATASET2.csv
 |- dataset_1.xml
 |- Dataset_2.3.csv
 |- script.py
 |- Script500.rdata
 |- plot_data6.rdata
</pre>

You have various files and types of dataset for your project and their number increases over time. It may not be a good idea to simply place all files and datasets under your project folder (as in Project_B). 

A well-structured project folder could improve efficiency in [finding]() a file among hundrads of files.

## Recommended practices

1. Establish a folder system and stay consistent.

2. At higher-level directory, create folders based on file type, data, or project stages.
 
 <blockquote>
    <details>
     <summary>Example</summary>
     <pre>
      Project_A
       |- 1 Raw Data
       |- 2 Processed Data
       |- 3 Analysis
     </pre>
          <pre>
      Project_B
       |- 1 Audio Files
       |- 2 Imaging Data
       |- 3 Other Data
     </pre>
    <pre>
      Project_C
       |- 1 Data
       |- 2 Shared Data_Institute A
       |- 3 Published
     </pre>
    </details>
     </blockquote>
     
3. For lower-level directory, consider how files should be organized in this folder.
   
 <blockquote>
 <details>
  <summary>Example_by date</summary>
  
  _In "Raw_Data" folder, files are organized by collection date._
  
   <pre>
    Raw_Data 
       |- 2021Aug
       |  |- rawData1.csv
       |  |- rawData2.csv
       | 
       |- 2021Dec
       |  |- rawData1.csv
       |  |- rawData2.csv 
     </pre>
 </details>
</blockquote>
  
   <blockquote>
    <details>
     <summary>Example_by stage</summary>
     
   _In "Data" folder, files are organized by their stage._
   
     <pre>
      Data
       |- Raw_data
       |  |- rawData_2021Aug.csv
       |  |- rawData_2021Sep.csv
       |  |- rawData_2021Oct.csv
       |
       |- Processed_data
       |  |- data_processed_2021Dec.csv
       |  |- data_processed_2022Feb.csv
     </pre>
    </details>
   </blockquote>
5. Create a README file at the beginning of your project and update it throughout the research.

   This is not mandatory for each folder but recommended for a higher-level directory or a complex dataset.

   For more details about README files, see [How to write a README file] (link to the readme-page)

<blockquote>
<details>
  <summary> <b>Example Project folder structure</b> </summary>
<pre>
Project_A
 |
 |- 0 Basic Information 
 |   |- Role & Responsibilites
 |   |- Project Introduction
 |
 |- 1 Data
 |   |- README_data.txt (What is in these folders? How to find a specific file/dataset?)
 |   |- 1 Raw Data 
 |   |   |- 1 Local Laboratory 
 |   |   |   |- README_rawData_local.txt
 |   |   |   |- dataset_1.csv
 |   |   |   |- dataset_2.csv
 |   |   |
 |   |   |- 2 External Data Source
 |   |   |   |- README_rawData_external.txt
 |   |   |   |- dataset_e_1.csv
 |   |   |   |- dataset_e_2.csv
 |   |   |   |- Script_1.py
 |   |   |   |- Script_2.py
 |   |   |   |- DataTransferAgreement/AuthorizationToReuse.pdf
 |   |   
 |   |- 2 Processed Data
 |   |   |- README_processedData.txt
 |   |   |- Processed_data.csv
 |   |   |- Script_processed.py
 | 
 |- 2 Result/Analysis
 |   |- README_analysis.txt
 |   |- Script_model_1.py
 |   |- Script_model_2.py
 |   |- Plot_model_1.jpg
 |   |- Plot_model_2.jpg
   
</pre>
</details>
</blockquote>

<br>


 ---
  
 #### Authors
 Yu-Ting Fu

 #### License
 This page is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)
 
 #### Last updated
 2024.09.05
 
 #### References
 
  1. [HMS RDM 2024 Webinar - I've generated Data, Now What? The When, Where, and How of Data Storage](https://www.youtube.com/watch?v=prtBCHQ2c50&list=PLWIsV2soJK-VaW7IhxYyyOwiamjVV_FuB&index=4)
  
  2. [HMS RDM - File Organization](https://datamanagement.hms.harvard.edu/plan-design/directory-structure)

