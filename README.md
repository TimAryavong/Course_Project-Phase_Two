# Course_Project-Phase_Two
Optimized what code I could from Phase one ,mostly in app.js. createListItem(item) is now used as a helper to addItem(), it is considerably easier on the eyes. <br />
<br />
browserApi.js adds browser api functionality, it allows the the browser to access(with permission) the users camera to snap a picture. <br />
<br />
some3rdparty.js just re-does the google geolocation API from our weekly lessons. I decided to reduce the scope of the project since I couldn't come up with any API's that I wanted to add, nor that I had the confidence that I could add a third party API a timely matter. It became stressful to try and come up with anything due to projects in other classes requesting just as much creativity(which I generally lack when it comes to project ideas).  <br />
<br />
Although I did reuse the geolocation API it still didn't work right away. Turns out that google's API has its own CSS that got overwritten by my either my style sheets OR bootstrap. So I found a resource that pointed to adding width and height css to the class/id of the element to make it show up.
<br />
I decided to use bootstrap for the CSS, and some grid template stuff that I learned from a recent workshop. Nothing special at all still.
