<h1 style="font-family:georgia">What Got Done?</h1>

<h3 style="padding:1em 0 1em 0">December 3rd</h3>

* Read about Trello tech stack
  * <em>TD: Check out Vue.js?</em>
* Create Trello board & populate with to do's
* Start basic static react app creation so I have something to think about
* Read & watch React tutorials on various grob:
  * https://blog.logrocket.com/creating-navbar-react/
  * https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
  * https://www.skillshare.com/classes/The-Complete-React-Bootcamp-2021-w-React-Hooks-Firebase/895676015
    * Completed lessons 35 through 55 of the class above; solidified some react knowledge; learned about hooks a bit; got some solid ideas about file setup, conditional rendering, styling [dynamic classes, etc.]

<h3 style="padding:1em 0 1em 0">December 8th</h3>

* Explore MUI components [12:10pm-12:40pm]
* Began creating App Diagram [12:40pm to 12:55pm]

<h3 style="padding:1em 0 1em 0">December 9th</h3>

* Watched/followed along with lessons 58 through 60 of https://www.skillshare.com/classes/The-Complete-React-Bootcamp-2021-w-React-Hooks-Firebase/895676015 [1:05pm - 2pm]
  * Hoping to gain a stronger understanding of multi-layout react sites & search functionality
* Spent some time troubleshooting VS Code shortcuts and extensions >[ [2pm - 2:21pm]
* Headache break. Sigh.
* Back to the bootcamp: lessons 61 through 65 [2:33pm - 4:05pm]
  * Learned a cool, scalable way to do a nav bar with an array
  * Learned how to structure search queries and display results [also work with APIs in that context, though I don't think I'll need that for this project]

<em>End of day thoughts: Would like to finish following along with the box office tutorial section [through lesson 82], but also would like to actually get something bigger than what I have "down on paper," so...goals for tomorrow...are?
- Create very basic app with input and queries and display?
- Play around and see if Firebase will adequately work for this project or if I need a different database/hosting option
- Watch as much of that tutorial as I have time for after I feel like my project exists in some way...?

Something like that...</em>

* 4:23 - 4:30pm - Oh, also updated KanBan board. Realized I need to figure out if Firebase is an ok solution for authentication, since I'm planning to use Browser Router and in this week's projects trying to use firebase auth with browser router was a huge nightmare....

<h3 style="padding:1em 0 1em 0">December 10th</h3>

[8:00am - 8:46am]: Started building out basic app
[] : Created Flow document to start describing basic user experience  

[8:49am - 10:12am]: Continue basic app build  

[10:12am - 12:15pm]: Return to the React Bootcamp lessons. 66 through 72
  * This should all be super useful, unless I run into a lot of trouble translating from using an API into using Firestore... 🤞  

[1:25pm - 1:45pm]: Did some reading and playing around with styled components, because my tutorial guy was using them. Figured out how to use extended classes & etc. Seems much more useful than I originally thought. Still not entirely convinced. What's really the difference between a styled.js and a styles.css? Blah blah.  

[1:55pm - 2:25pm]: MORE TUTORIAL. WOOooOooOoOoO. 🥴 Lesson 73. Can't do any more. Using local storage is up next, anyway, and I don't want that...going to go back to trying to integrate Firebase with my app. Hopefully not a waste of time. :D  

[1:30 - 5:15pm]: <span style="text-decoration:line-through;">Continue basic app build</span>. Got overwhelmed and started a new, different tutorial around 1:45. It is promising so far.  
https://youtu.be/VqgTr-nd7Cg

<br />
<em>End of Day Thoughts:</em>  

The setup I have now, after getting most of the way through the to do tutorial feels like actual progress, ha ha. Will finish the last 30 or so minutes of that and then should be able to start exploring data-structures, filtering, and queries, which I think will be the bulk of the non-ui work.
<hr>

<h3 style="padding:1em 0 1em 0">December 17th</h3>

Planning thoughts:
Going to start the day by finishing that YouTube to do tutorial/walkthrough
Then it's time to start exploring/figuring out data structures, queries, etc.

[8:00 - 10:00am]: I have spent the past 2 hours trying to troubleshoot why the app is no longer bringing in content from the firestore database [it's still adding properly]. I have not figured it out yet. I may die of this.

[10:34am]: Fixed. How? Not sure. Don't care rn. It's working. My life can continue. Taking a break.

-- Oh, I also deployed via firebase before I realized everything was broken. So it's live now. Had friends test it.

[10:45 - 11:40am]: Finished tutorial. 🤓

[11:40 - 12:30pm]: Try to figure out how to disable github action deploy...not sure if I did it or not. Not super important right now, I guess.

[1:30 - 2:43pm]: Did some stuff idr [see git commits] & then tried to figure out how to use Firestore ids as unique object keys. Giving up on that for now.

<hr>
<h3 style="padding:1em 0 1em 0">December 21st</h3>
[9:00 - 11:34am]: Styling to make myself feel better; then tried to add react-router and ended up upgrading firebase and everything broke and it's terrible. I also seem not to have actually committed or pushed or something at the end of the day last time I worked on this, and my branching didn't work, so I rolled back a bunch of changes via vs code and I'm basically back where I started with a few new components that I will try to make work without upgrading firebase...  

[11:34 - 12:15pm]: Moved some stuff around [App content to ButlerControl, etc.]  

[1:15 - 2:09pm]: Going to attempt to add react-router without upgrading anything...Did this for a static form. Waiting to connect to Firestore for a while while I work on other stuff. Also started adding navigation. Ended up downgrading to react-router & react-router-dom 5.2.
<span style="background-color:hotpink;">My old version was "react-router-dom": "^6.2.1". Noting in case I need to change back.</span> But so far, with a few tweaks, it's all working fine, and this means I can use the easy 404 trick and some other things I learned in tutorials.

[2:09pm - 5:10pm]: See Git commits.  

For tomorrow...I need to do everything. But, I guess, priorities?  
1. Enable navigation with MUI drawer
2. Finish splash
3. Put to do list in modal? Or on its own page
4. Update item adding to include filtering fields
5. Everything else.
6. 🤢 & 🪦  

<hr>
<h3 style="padding:1em 0 1em 0">December 22nd</h3>

[Morning]: See Git commits


<hr>
<h3 style="padding:1em 0 1em 0">Things to Come Back To</h3>
* Use firestore ids as object keys