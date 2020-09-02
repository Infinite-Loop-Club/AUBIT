## Constants

This folder is seperately made to change the content without accessing the source code.

**slides.js** and **flash.js** files are used to change each content in the website. Both of these files are explained below:

### slides.js

> This file is used to change the pictures in the gallery. The attributes defined here are:

1) src - To define image source
2) alt - To display alternative text in case of image not visible

### flash.js

This file is used to render the contents in the Flash tabs. It consists of three arrays:

1) news - To change content of News Tab
2) events - To change content of Events Tab
3) links - To change content of Links Tab

All three of them contains 3 attributes. Those are explained below:

1) name - The content to be displayed in the website is given here
2) link - The corresponding link to which it should redirect when clicked
3) isNew - Boolean. "True" to display the NEW badge and "False" to not display NEW badge

### Others

It also contains several folders for changing content of several components. Those are mentioned below:

1) [Gallery](./Gallery "Gallery")
2) [Staff](./Staff "Staff")
3) [Table](./Table "Table")
