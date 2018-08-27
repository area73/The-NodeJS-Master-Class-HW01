# The-NodeJS-Master-Class-HW01
Home Work 01 for The NodeJS Master Class

## Instalation
These series of work are intended to be 0 module dependant , that means that no NPM or any other 
module manager are needed in order to run the program, just plain NodeJS :)

To run the server just open your terminal and from root of this project run:

    node server.js 

Additionally there are some configuration parameter that you can define at start time:

    --env:<dev || prod>     will define what enviroment you are working on (actually we setup 2 
    enviroments, dev & prod)
     
     --ports:<http,https> define the port to be assigned to the server. If the port is taken it 
     will 
     show a 
     warnin message and the server will try to get next upper port available
     
     --protocol:<http,https,all>  
     
     -H: Help showing this info
     
     
      



## Homework Assignment #1 description

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 

2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

