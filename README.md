# Fitness-Tracker

Fitness Tracker application

# Fitness-Tracker

Unit 17 homework

See the deployed app on Heroku:

https://dashboard.heroku.com/apps/sleepy-brushlands-08618

# Project Description

The Fitness Tracker is an app which allows the user to add exercises to a database, and also view a page which displays summary data on the last seven workouts.

The app interacts with a database containing "Workout" objects, and each Workout contains an array of "Exercises." The home page of the app allows the user to choose either to begin a new Workout or continue with the most recent Workout in the database.

Clicking on either of these buttons will direct the user to the exercise creation page. An exercise may be either "cardio" or "resistance," and the app prompts the user for different information depending on the choice. When all required information has been entered, the user may add a new exercise to the workout or finish and return to the home page.

By clicking on the "Fitness Tracker Dashboard" icon on the top of the page, the user is directed to the Stats page which displays graphs summarizing the last seven Workouts.

# Techniques and Technologies Used

This app uses Express web server, and a MongoDB database to store the Workout data. It uses Mongoose to set up the schema for the Workout objects and interact with the database. HTML pages are served to the user via a set of HTML routes, and database queries are defined using a set of API routes.
