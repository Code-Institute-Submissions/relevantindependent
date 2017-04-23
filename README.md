# Relevant Independent README.

## Overview

### Why does Relevant Independent exist?
I wanted to make a website containing news and reviews for independent video games.

### What does the code do?
The code will allow users to view reviews, after registering with a username and password.

## Features

### Existing Features
- ability to register, in order to unlock reviews

### Features Left to Implement
- User Based Features
	- Email registration
	- Login/out

- Site Features
	- Many reviews planned to put up
	- News section planned
	- Possible forum section in the future

## Contributing:
Please feel free to contribute! You can find me under alexmiller64 on github, and the project under relevantindependent. Please feel free to make any changes or additions you see fit, then submit a pull request.

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
  	 `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install

  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request

## Tech Used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
	- We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
	- We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of our libraries and frameworks


## Validation:
All relevant code has been run through a Markup Validation service here: https://validator.w3.org/check


## Built with:
- Bootstrap - Framework used
- HTML5, JavaScript, CSS - Syntaxes used


## Author:
Alex Miller


## Acknowledgements:
- Matt Rudge (Tutor at Code Institute) - for guidance and advice
- Staff at Code Institute - for lessons on which Relevant Independent is based. Also for "getting the code up and running" section and "Tech Used/Some of the tech used includes" section of this README.
