// Edit this file to update the site. Leave `github: ''` empty to keep a project's button disabled.
export const profile={name:'Vijay Kumar Kamanaboina',title:'Aspiring Azure Data Engineer & Data Analyst',location:'Vijayawada, Andhra Pradesh',
email:'vijaykumarkamanaboina@gmail.com',linkedin:'https://linkedin.com/in/vijaykamanaboina',github:'https://github.com/vijjuk9933',
summary:'Aspiring Azure Data Engineer and Data Analyst with hands-on experience in building ETL pipelines and processing large-scale datasets using Azure cloud technologies. Skilled in Python, SQL, PySpark, Azure Data Factory, ADLS Gen2, and Databricks with strong interest in scalable data solutions and workflow optimization.',
why:'I like working with data and turning raw inputs into something people can use. Building ETL pipelines, transforming data with PySpark, and learning how cloud platforms like Azure store and process data at scale is the work I want to grow in. Analytics and Power BI let me close the loop by showing what the data says.'}
export const nav=['Home','About','Skills','Projects','Architecture','Education','Achievements','Contact']
export const pillars=[['01','ETL Pipelines'],['02','Cloud Data'],['03','Big Data'],['04','Analytics']]
export const skills=[
['Azure & Cloud',['Microsoft Azure','Azure Data Factory','ADLS Gen2','Azure Databricks']],
['Programming & Querying',['Python','SQL','MySQL','PySpark']],
['Data Engineering',['ETL Pipelines','Data Transformation','Data Warehousing','Data Modeling']],
['Big Data & Analytics',['Apache Spark','Apache Airflow','Power BI']],
['Development Tools',['Git','GitHub']]]
export const workflow=[
['Data Sources','Where the data starts, such as files or APIs.'],
['Data Ingestion','Pulling data in with Azure Data Factory or Python.'],
['Data Storage','Landing raw data in ADLS Gen2.'],
['Data Transformation','Cleaning and reshaping with PySpark and Apache Spark.'],
['Data Modeling','Structuring curated data for analysis.'],
['Analytics','Querying and analyzing with SQL and Python.'],
['Visualization','Presenting insights in Power BI.']]
export const arch=[
['Source Data','Where the pipeline begins.'],['Azure Data Factory','Data ingestion and pipeline orchestration'],
['ADLS Gen2','Cloud data storage'],['Bronze Layer','Raw data'],['Azure Databricks','Large-scale data processing'],
['PySpark','Data transformation'],['Silver Layer','Cleaned/transformed data'],['Gold Layer','Curated analytical data'],
['Power BI','Analytics and visualization']]
export const projects=[
{title:'End-to-End Azure Data Engineering Pipeline',category:'Azure Data Engineering',github:'',
desc:'Designed and implemented scalable ETL pipelines using Azure Data Factory and ADLS Gen2. Performed large-scale data transformation using PySpark in Azure Databricks and applied Medallion Architecture for structured data processing.',
tech:['Azure Data Factory','ADLS Gen2','Azure Databricks','PySpark','Power BI'],
points:['Designed scalable ETL pipelines','Azure Data Factory ingestion, ADLS Gen2 storage','PySpark transformations in Azure Databricks','Bronze / Silver / Gold architecture','Curated analytical data and Power BI insights','Scheduling and triggers for automation'],
visual:['Source','ADF','Bronze','Databricks','Silver','Gold','Power BI'],
details:[['Problem','Process raw data at scale and make it structured and ready for analysis.'],['Approach','Ingest with Azure Data Factory, store in ADLS Gen2, transform in Databricks, and organize with the Medallion Architecture.'],['Technology Stack','Azure Data Factory, ADLS Gen2, Azure Databricks, PySpark, Power BI.'],['Pipeline Architecture','Source data, Bronze, Silver, Gold, then Power BI, automated with scheduling and triggers.'],['Data Transformation','Large-scale transformation using PySpark in Azure Databricks.'],['Analytics','Curated data loaded into analytical layers, with insights generated in Power BI.']]},
{title:'Weather Data ETL Pipeline',category:'Data Engineering',github:'',
desc:'Collected real-time weather data using APIs and processed datasets using Python. Transformed and analyzed large datasets using Apache Spark and implemented workflow orchestration using Apache Airflow.',
tech:['Python','Apache Spark','Apache Airflow'],
points:['API data collection','Python processing','Data transformation with Apache Spark','Workflow orchestration with Apache Airflow','Reliable, repeatable ETL workflows'],
visual:['Weather API','Python','Processing','Spark','Airflow','Analysis']},
{title:'AI-Based Medical Diagnosis & Virtual Doctor Assistant',category:'AI / Machine Learning',github:'',
desc:'Developed an AI-powered healthcare assistant using Flask, TensorFlow, and OpenCV. Built ML and computer vision models for disease detection using medical datasets.',
tech:['Python','Flask','TensorFlow','OpenCV'],
points:['Machine learning','Computer vision','Data preprocessing','Feature extraction','Model training'],
visual:['Medical data','Preprocessing','Features','Model','Assistant']}]
export const education=[
{title:'B.Tech in Computer Science and Engineering',place:'Kalasalingam Academy of Research and Education',year:'2022 - 2026',score:'CGPA: 6.59/10'},
{title:'Intermediate',place:'Sri Chaitanya Junior College',year:'2022',score:'Percentage: 63%'},
{title:'SSC',place:'Sri Chaitanya Techno School',year:'2020',score:'CGPA: 10/10'}]
export const achievements=[
{kind:'Achievement',title:'ICECA 2025',text:'Presented research paper at ICECA 2025 conference.'},
{kind:'Certification',title:'Database Management Systems',text:'Completed certification in Database Management Systems.'}]
