# HouseTable

A house table project 
Task Node.js &amp;React.js
## Description

In this app you can create, get details and update house
1. Create house:
in the path: http://localhost:8000/house

![1](https://github.com/estyr/HouseTable/assets/51904496/8e82134d-a87b-4e87-9cca-7df3b205dbcb)


upon submission the form the endpoint http://localhost:8000/api/houses
is call and create the house in the table in this function in server side 
,classes/house.js:

![image](https://github.com/estyr/HouseTable/assets/51904496/1b46ea61-174a-4a32-aaea-eceae79fa234)


2. Get house details after creation:
in the path : http://localhost:8000/details 

![image](https://github.com/estyr/HouseTable/assets/51904496/598438e6-1a4a-4939-8e92-69367cf5a751)

the endpoint http://localhost:8000/api/houses/specificid is call and 
return the details of specific house in in this function in server side , 
classes/house.js:
![image](https://github.com/estyr/HouseTable/assets/51904496/0d37c42d-9946-4e79-b641-017e4b7c5a7e)


3. Update house in the path: http://localhost:8000/update
![image](https://github.com/estyr/HouseTable/assets/51904496/0f0fb752-d091-4ca2-bc17-fa4f0fc3e7f6)

upon submission the form the endpoint 
http://localhost:8000/api/houses/specificid is call and update the specific 
house in the table in this function in server side ,classes/house.js:
![image](https://github.com/estyr/HouseTable/assets/51904496/c6b0786b-66c8-4239-bda3-3bcd3f64b966)






## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

## Install
    $ npm install npm -g



## Running the project in the development mode


    $ node app.js

  Open [http://localhost:8000/house](http://localhost:8000/house) to view it in your browser.



