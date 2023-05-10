# Student Enrollment Form using JsonPowerDB
## Description 
This is a small web based project of Student Enrollment Form using JsonPowerDB database and it's apis.
The form takes Student's following details as input fields: 
{Roll-No, Full-Name, Class, Birth-Date, Address, Enrollment-Date}.
We can either Add a student detail or Update an existing detail of student through the form.

# Table of Contents
* Benefits of using JsonPowerDB
* Release History
* Illustrations
* Example of Use
* Project Status
* Sources
* Other Information - Installation

# Benefits of using JsonPowerDB
* It is simple to use and easy to understand (the apis and the database).
* JPDB uses JSON format to post and retrieve response from database, which is not only very easy to understand but also is fast and cost effective.
* Querying the JPDB database is easy and it doesn't require knowledge of SQL.
* It provides real time database. 

# Release History
* This project was first uploaded on github on 9th May 2023.

# Illustrations:

## Interface Screenshot
<img src="/images/save_data_overview.png">

## Database Screenshot
<img src="/images/database_jpdb.png">

# Example of Use

* **On page Load**
<img src="/images/initial_interface.png>

The RollNo field is on focus and we need to enter the Rollno for proceeding.

<img src = "/images/rollno_entry.png">

After entering the RollNo., it will search for any existing student details of matching Rollno. If it not found then the other input fields will be accessible for filling up new student details.
The 'Save' and 'Reset' Buttons will be clickable now.

* **Adding New Student Data**

<img src="/images/save_data_overview.png">

Now if any of the fields i.e the 'Name', 'Class', 'Date of Birth', 'Address' or 'Date of Enrollment' is missing and if tried saving it, then it will give pop up alert that the particular input field is missing.

<img src="/images/name_missing.png">
<img src="/images/class_missing.png">
<img src="/images/dob_missing.png">
<img src="/images/address_missing.png">
<img src="/images/enroll_date_missing.png">

After filling the input fields and clicking the 'Save' button, the details will be stored in the JPDB database with a Successfull Entry pop-up alert. 

<img src="/images/data_added_successfully.png">

The form will then automaticaly reset and the input fields will be cleared.

* **Updating Existing Student Data**

Now when a RollNo which exists in the database is given in the 'Roll Number' field, it will automatically fetch the student details from the database and will fill up the form input fields for updating any field. Also the 'Roll Number' field will be now disabled and the 'Update' and 'Reset' Buttons will be enabled/clickable now.

<img src="/images/existing_data.png">

Upon updating the filled data of the existing student details, and clicking on 'Update', the details will be updated in the database and we will be getting a Successfull Update message pop-up alert.

# Project Status
* This project matches with the given problem statement provided.

* But the project can be still improved on many important working features like adding 
    - RollNo validity check, adding parent details
    - Occupation and income status of the student's parents/family
    - Adding House phone number of students
    - Adding student aadhaar or any unique credentials to the database


# Sources
* Introduction to JsonPowerDB -V2.0 Course : https://careers.login2explore.com
* Bootstrap : https://getbootstrap.com/docs/5.0/getting-started/introduction/
* w3schools jQuery: https://www.w3schools.com/jquery/default.asp

# Other Information

* **Cloning the repository**
Go to the desired directory of you system where you want to install, open git bash or terminal and enter the command

```python
git clone https://github.com/rounak-das2008/JsonPowerDB-Student-Enroll.git
```

After cloning, move to the 'src' folder and then 'js' folder and in 'index.js' replace the 'connToken' with your connection Token which you will get from http://api.login2explore.com:5577/







