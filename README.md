Coffeetawk

I made this app for Application Lab, a course at NYU Shanghai, during sophomore year. 

What is Coffeetawk? 

Coffeetawk is a static web page. - a UI prototype demoing an imaginary web app that makes collecting data easy. 

Data consumers (market analyzers, statisticians...) can issue data models on the imaginary web app. Regular people can log onto this imaginary web app and collect data without any training. 

Coffeetawk demonstrates the data collecting UI. 

How did I make it? 

Coffeetawk started as a paper prototype. I made UI components with paper and crafted them together, as a draft process. 

Coffeetawk is my first experience using REACT. It is a REACT app with Bootstrap styling. 

Other comments

In this app, I focused on making the UI A) make sense to first-time users, and at the same time B) efficient to operate for regular users. 

Take a look at the commit messages: 
    Now you can press Enter to submit password
    Added comments [documenting source code]
    changes css to make things apparent for first time users
    enhanced security by deleting password cache once login success
    Changed submit to update wehen in edit mode

Apart from the above features, Coffeetawk also uses plural and singular nouns correctly. 
    "0 drinks, 1 drink, 2 drinks, 3 drinks, 4 drinks..."
Also, if the data input are invalid, the Submit button will be white. It turns green when all data are validated, telling the user: you can click it now. 
Previously, I made the button not display whenever some data are invalid. That was a bad idea. The user had to scroll a second time after they validate the data, for the new button to appear. So, I changed it to the white-green scheme, saving the user one swipe. 

GIF Demo

[Alt Text](https://media.giphy.com/media/oymRyMemkmjrKxcVHk/giphy.gif)

How to try it

You need to have npm installed. 
To try this demo, 
1. Clone this repo
2. $ npm i
3. $ npm start

Daniel Chin
2018/12/18
