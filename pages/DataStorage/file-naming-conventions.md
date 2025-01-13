>[!TIP]
> FAIR indicator: <code>[Findable]()</code>, <code>[Reuseable]()</code>
> 
> Project stage: <code>Beginning</code>  || Audience: <code>All</code>

# File Naming Conventions

### Why do we need conventions for file names?

A file with an informative name improves efficiency for everyone.

 - You know what is in the file without opening it.
 
 - Your team members could easily [find]() the file they need without asking you for details.
 
 - Your collaborators from another institute could easily identify the file and [reuse]() them without waiting for your reply. 

For example, you have to open _"dataset3.csv"_ to know what is in the file. While you can visually understand what is in _"adverseEvent_hospital-05_20240501.csv"_ and use it. 
<pre>
  Project_A
    |- dataset3.csv    
    |- adverseEvent_hospital-05_20240501.csv
</pre>

>[!IMPORTANT]
>Before naming a file, checking if there is a README file documenting the convention or asking around.

### What to consider before establishing a naming convention?

1. What distinguish these files from other files? (Consider metadata like the content, date, location, etc.)

2. Pick the three most important metadata. (It is not a "the more the merrier" situation)

3. The name should be human-readable and contain enough information for visually scanning the files.

4. Document your conventions that your team members or researchers from another institute could easily understand.

5. Use different conventions for different type of files.

   <blockquote>
     <details>
       <summary>Example</summary>
       
   _A reaserch project has documents like protocol, code book, agreements etc. that are unique in their folder. They could have a shared convention as [fileTitle\_updatedDate\_status\_version]._ 
   
     _And for dataset that may have multiple files in a folder, they could follow a convention for dataset as [datasetTitle\_serial-ID\_location\_date\_status].)_

     </details>
   </blockquote>

   
### Recomended practices

1. Use two or three digits for numbering.

   <blockquote>
     <details>
       <summary>Example</summary>
       
   _Use "01_image.tif", "05_image.tif" instead of "1_image.tif"._

   _Otherwise "10_image.tif" will appear on the top when sorting the files._

     </details>
   </blockquote>
   
2. Avoid having blank spaces in the name. If combining words together as metadata, capitalize the first letter of each word for human readibility.

     <blockquote>
     <details>
       <summary>Example</summary>
       
   _livertissue20210506.tif_ <br>  and <br>   _LiverTissue\_20210506.tif_
   
   _rightarmmedicalimage20210325.dcm_ <br>  and <br>   _RightArmMedicalImage\_20210325.dcm_
     </details>
   </blockquote>
   
3. Be case-sensitive and stay consistent for the machine readability. 
    <blockquote>
     <details>
       <summary>Example</summary>
       
   _"tissuesample.csv" and "TissueSample.csv" are different string for the machine._

     </details>
   </blockquote>
   
4. Avoid special characters in the file name.

   Use hyphen <b>( - )</b> to seperate numbers and underscore <b>( _ )</b> to seperate metadata.

   <blockquote>
     <details>
       <summary>Example</summary>
       
   _LiverTissue\_Mou-255\_SampleId-8526\_2020-01-30.tif_
   
   _MedImage\_Forearm-1\_PatId-123\_Hospital-09\_20210325.dcm_
     </details>
   </blockquote>
   
5. Use abbreviations or codes to keep the file name short and self-explanatory. Ideally under 50 characters.

   Document used abbreviations or codes. Do not leave any "commonly known" abbreviation undocumented.
   
   <blockquote>
     <details>
       <summary>Example - abbreviations</summary>

      _Labotory A = LabA, Project 2 = P2, Mouse with serial number 255 = MOU-255_
   
     </details>
   </blockquote>
   <blockquote>
     <details>
       <summary>Example - codes</summary>

     _H = high, N = normal, L = low_
   
     </details>
   </blockquote>
6. Document the naming convention in a README text and keep it with the files. (link to how-to-readMe)

   <blockquote>
   <details>
     <summary> Example_01</summary>
     
   _The naming convention for biopsy sample dataset is:_

   _<b>[Bodyparts]\_[Serial-ID-Number]\_[LaboratoryName]\_[YYYY-MM-DD].[csv]</b>_
   
   </details>
   </blockquote>
   
   <blockquote>
      <details>
     <summary> Example_02</summary>
        
     _The image files are named <b> lll\_ssss\_rr\_vv.tif </b> where:_

     _lll = Three digits location code to indicate where the image was generated_

     _ssss = Numeric sample Id_

     _rr = Resoultion level_

     _vv = Two digits version code_

   </details>    
   </blockquote>   

### How to decide the order of metadata in the name?
  
1. Place the most important metadata at the beginning.

2. Consider this: how would you like to sort the files? _(i.e. alphabetically, numerically or chronologically)_

### How to track the change of files?
  
1. Add version information. Could be number (_e.g. v1.2, v3.0_) or status (_e.g. \_processed, \_amended, \_raw_).

2. Add a date. Make sure the format of date is consistent. (_i.e. using YYYYMMDD or YYYY-MM-DD_)

<br>

---
#### Authors
Yu-Ting Fu

#### License
This page is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)


#### Last updated
2024.09.05

#### References

  1. [HMS RDM 2020 Workshop - How to name a file](https://www.youtube.com/watch?v=WKViHPvBo_Y&list=PLWIsV2soJK-VaW7IhxYyyOwiamjVV_FuB&index=87)
  
  2. [CDS - File Management](https://data.research.cornell.edu/data-management/storing-and-managing/file-management/)

