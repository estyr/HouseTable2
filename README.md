# HouseTable
Task Node.js &amp;React.js
In this app you can create, get details and update house
1. Create house:
in the path: http://localhost:8000/house
![Uploading image.png…]()





upon submission the form the endpoint http://localhost:8000/api/houses
is call and create the house in the table in this function in server side 
,classes/house.js:

2. Get house details after creation:
in the path : http://localhost:8000/details 

![image](https://github.com/estyr/HouseTable/assets/51904496/598438e6-1a4a-4939-8e92-69367cf5a751)

the endpoint http://localhost:8000/api/houses/specificid is call and 
return the details of specific house in in this function in server side , 
classes/house.js:
3. Update house in the path: http://localhost:8000/update
upon submission the form the endpoint 
http://localhost:8000/api/houses/specificid is call and update the specific 
house in th
# Project Title

A house table project 

## Description
App to create show details and update house 
performed in node.js and react.js

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

## Install
    $ npm install npm -g



## Running the project in the development mode


    $ node app.js

  Open [http://localhost:8000/house](http://localhost:8000/house) to view it in your browser.



