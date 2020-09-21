# Learning ReactJS

**React App with PHP and MySQL: front-end communicates with back-end**

React is a front-end library, manipulating DOM sufficient and enabling single-page application. The *axios* is a powerful library offering HTTP management, which allows you tranfer data from and to server.

## Installing Apache Server

Apache server is the most common server used in some public hosting company. For the cheapest package called virtual shared host, you can not install any personal package such as node.js. Therefore, probably only PHP is supported at the server side.

The *xampp* open source software provides a user-friendly interface, to deploy a Apache server as well as MySQL database in a local computer.

## Create a database in MySQL

After installing xampp, you can open the PHPMyAdmin to manage your own database. Create a "reactdb" database by importing the file `/database/reactdb.sql`.

## Put PHP files in Apache host

If you did't modify any configuration file of xampp, the default root directory should be in the htdocs folder inside the xampp directory (for windows, it is in `C:/xampp`). Copy the whole `react-app` folder inside the `htdocs`.

## React App in subdirectory

This tutorial also shows that how can you put a React app in a subdirectory. You have to do the following
- add `base=<basename>` inside the router (routes.js)
- add `homepage: /your/home/page` in the Webpack configuration file (json-package.json)

