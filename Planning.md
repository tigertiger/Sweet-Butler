<h1 style="font-family:georgia">Sweet Butler</h1>

<h3 style="padding:1em 0 1em 0">Initial Plan/Proposal</h3>

This app is meant to help you remember how you want to spend your time. Instead of a “to do list,” or a “productivity tool,” Sweet Butler helps you to be kind to yourself while you try to exist in a stupid, stressful world.

Sweet Butler keeps track of things you want and need to do—anything from watching a video your mom sent you to paying your taxes—and helps you choose what to engage with depending on your current state of mind, available time, and more.

The app’s focus is on being anxiety-conscious and there when you need it, rather than another intrusive, panic-inducing distraction.

List the absolute minimum features the project requires to meet this purpose or goal:

* Holds a database of items that are filterable by:
  * Keepsakes (quotes, personal reminders, other text, etc.) vs Actions
  * Duration/Time-Needed
  * Energy Level
  * Location
  * Want to/Need to
  * Has an anxiety-conscious UI
    * This would generally mean customizability of appearance including color-scheme, sound-effects, etc. 

        But also, and more importantly, it means that the filtering system and the language used in the app are built in a way that makes it a pleasant and un-intimidating tool to use, even when every little thing feels stressful.

<hr style="padding-top:1em">
<h3 style="padding:1em 0 1em 0">Languages/Frameworks/Tools</h3>

* Javascript
* CSS
* HTML
* SQL
* React
* MUI React Component Library? https://mui.com/
  * NB: Suggested by Cathy

<hr style="padding-top:1em">
<h3 style="padding:1em 0 1em 0">Stretch Goals</h3>

* Easy-access tools:
  * floating window, positionable wherever on your screen [can stay on top]
  * Keyboard shortcuts to add items, open the main app, etc.
  * Notifications
    * NB: This implies that the app understands time
  * Ability to store images/videos/etc.
  * Folders or notebooks [maybe?]
  * Cloud sync
  * Mobile app

<h3 style="padding:1em 0 1em 0">Notes</h3>

My priority is to focus on the user-experience, so while making the mvp seems pretty straightforward, the real mvp is creating it in a way that it effectively manages all its pieces in a way that makes things easier, not more of a hassle, for the user.

<hr style="padding-top:1em">

<h3 style="padding:1em 0 1em 0">From Erik</h3>

I think this is great! Not only is it a better-purposed to-do-list (not in a negative way), but it really has a purpose-driven development. I also struggle with the sorts of things you listed there, such as capacity/bandwidth for accomplishing tasks. Cleaning, opening mail, calling mom, etc -- and it can be hard to keep them in my head! This would help people like me! I also think your goals for MVP and stretch goals are really well placed. I think it's good to be conscientious about the possibility of a phone application, but certainly not necessary. 

A few things about this one: 

* Take motivation from similar apps
  * When I think of labeling these sorts of items, my mind goes to a Trello board, or a notion board.

  * It might be worth thinking about how the content itself determines how it's displayed. Is it a video? Is it a task? is it a want/must-do? 
    
    * The modularity behind react components could help you here. You can conditionally render different types of things depending on the content the user provides it.  
    .
* Is style one of your focal points?
  * I see you reference things such as "anxiety-conscious design" and "color schemes" and being able to change those modularly. 

  * This can be a hurdle in itself, and I think it is also fantastic to think about. 

  * You may consider creating a wireframe or layout before you start messing with CSS. It's better to make decisions through a full picture rather than through editing CSS properties until you find something. 

* Is functionality itself the focus? 
  * Some of the features, such as suggesting what task to do based on state of mind, can be pretty complex to figure out (this is good!)

  * Usually, we put design as the last step - almost like post-production. 

  * I'd recommend attacking this with that in mind! 

