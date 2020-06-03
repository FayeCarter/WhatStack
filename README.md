# final_project

## contributors
[Angelica Beristain](https://github.com/Angelica137) | [Faye Carter](https://github.com/FayeCarter) | [Steven Klavins](https://github.com/Steven-klavins) | [Edward Phillips](https://github.com/Edward-Phillips) | [Phil Vigus](https://github.com/PhilipVigus)
## sections
[Outline](#Outline) | [Specifications](#Specifications) | [User Stories](#User-Stories) | [Using Product](#Using-WhatStack) | [Set Up](#Set-up) | [Tech Stack](#Tech-Stack) | [Challenges](#Challenges)  | [Feature Roadmap](#Feature-Roadmap)

# Outline
In this project we were given two weeks as a team of 5 to build a product to solve a problem, with a feature freeze on the second Wednesday and a demonstration on the final day.

# Specifications

During our time at makers we have been blocked. A lot. Asking for help can be tough, it's difficult to acknowledge your own ignorance and sometimes places can be less than welcoming to newcomers asking a question that's been covered before - think back to all the times you've seen someone on stackoverflow saying "that's a stupid question" or "This is a duplicate of \<some other question which while similar isn't actually your question>" we decided that 
- it shouldn't be so hard to ask for help 
- you can reach a solution quicker through a 5 minute conversation than posting a question on a message board and hoping someone gets back to you with something more positive than "that's a stupid question"
- if someone has the same problem as you, they should be able to be part of that conversation.

# User Stories

To view the user stories that this project has completed features for, [please visit our wiki page!](https://github.com/FayeCarter/WhatStack/wiki/User-Stories)

# Using WhatStack
Want to check the application out? [Click here!](https://whatstack.herokuapp.com)

## Logging in

Whatstack is designed to be easy to access for developers, so instead of having to create an account and register, you can simply login with your Github account.

## opening a chat room

once you're logged in you'll be taken to the /rooms screen, which is where you can either make a new room to help you with your problem, or if you see another room already there that covers it you can join that conversation instead.

## sending (*plaintext*) messages

Once you're in a room you can contribute to the conversation by typing your message into the text area and clicking the 'send message' button.

## sending (*codeblock*) messages

Want to send a block of code? No problem, simply add three backtics (\`\`\`) to the beginning and end of your code block, you can even specify a language for the code to be formatted in by writing the language immediately after the backticks e.g. \`\`\`ruby \<some code> \`\`\` and the result will be a code block correctly highlighted in the ruby style. The language is set to javascript by default.

# Set up

The steps below outline how to set up the project to run on your local machine.

## Set up a MongoDB database

* Follow the appropriate instructions [here](https://docs.mongodb.com/manual/installation/) if you want your database to be hosted on your local machine (recommended if you just want to play around with the code).
* An alternative is to set up a remote database on a service such as Atlas, in which case follow the instructions [here](https://docs.atlas.mongodb.com/getting-started/)

## Set up your Github Auth0 application

* Follow the instructions [here](https://auth0.com/docs/connections/social/github)

## Get the repository and add sensitive information needed for the application to work

* Clone the repo
* run npm install in the root and client folders to install project dependencies
* Create a .env file in the root folder with the following content (some of this information is sensitive and should not be uploaded to GitHub)
```
GITHUB_CLIENT_ID=<from your github Auth0 account>
GITHUB_CLIENT_SECRET=<from your github Auth0 account>
COOKIE_SECRET = <choose an appropriate password>
BACKEND = http://localhost:5000
FRONTEND = http://localhost:3000
MONGOCREDS = <link to your mongodb database>
SKIP_PREFLIGHT_CHECK=true
```
* Create a .env file in the client folder with the following content
```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_BACKEND = http://localhost:5000
```

## Start the application
```
# Start the server from the root directory
npm start

# Start the React server from the client directory
npm start
```
This should automatically open the application webpage if you've set up everything correctly.



# Tech Stack

## Frontend

The Frontend for this project uses react to generate a Single Page Application served on the "/" route. To read more about the composition and design of the Frontend [please visit our wiki page!](link-to-wiki-page-here)

## Backend

The Backend for this project uses NodeJS and express to serve the "/" route and various backend routes. To read more about how our Backend is set up, [please visit our wiki page!](link-to-wiki-page-here)

## Database

The database for this project is MongoDB and this is hosted on Atlas(? Confirm hosting service), the mongoose library is also used to interact with the database in the backend when data needs to be read from or created in the database. To read more about how we set up and itneract with the database, [please visit our wiki page!](link-to-wiki-page-here)

## testing

Due to the exploratory and experimental nature of this project testing has been limited to exemplars of how difficult to test behaviours should be tested. Frontend tests make use of the react testing library, wheareas the Backend tests only use Jest. To read more about our approaches to testing.... [please visit our wiki page!](link-to-wiki-page-here)

## hosting

The hosting service used for this project is Heroku, as they provide a free tier and also have excellent documentation and support for common issues when deploying.

# example usage

# Challenges

As a team we encountered several challenges while working on this project:
- Testing
  - Testing in this project has been a challenge from the start. As we had chosen to work with new technologies that we hadn't seen before it proved to be a challenge to write tests to drive the development of our code, as we did not know how to express the desired behaviour in these new languages. As a group after spending some time trying to drive the development of the project through tests we decided that TDD/test coverage was secondary to learning these new technologies, so we agreed that we would manually test our code until our knowledge had reached a point where we were able to write tests for the desired behaviour. An example of this is testing sockets which has proven to be a real challenge, there is a dearth of documentation but after much trial and error we found a way to test sockets and wrote exemplars on how to test sockets on both the server side and client side.

- Time
  - Managing time over the course of the project has been a challenge as our final project coincided with the late May bank holiday meaning that we lost a day of project time, which really put the pressure on to achieve our MVP by the deadline we had set. Once we accepted that we didn't have to hold ourselves to these internal deadlines work went a lot smoother. In addition to this, to try and recoup some of the time lost due to the bank holiday some of the team agreed to work over a portion of the weekend.

- Knowledge Sharing
  - Knowledge sharing was a concern from the get-go, we knew that it was inevitable that some people would end up with higher knowledge levels in certain sections of the codebase than others, to try and combat this as effectively as possible we decided to frequently rotate pairs and to have code demos in our daily retros so that even if you didn't work on the code you were walked through what it did and how it did it and had an opportunity to ask questions about it. We also had every pull request reviewed by two team members who hadn't worked on the ticket prior to merging to ensure that: (A) the code was easy to read and (B) team members were exposed to the whole codebase as much as possible.

- Learning new Languages
  - Learning a new language can be a challenge, but in this project it's been a really enjoyable experience, Our approach when learning new languages was to find the simplest thing we wanted to achieve in that language, research how to do that, implement the code and repeat that process until the feature we wanted to implement had been completed.
  - For particularly challenging aspects such as the initial set up of sockets we would follow a tutorial on a test project to do something similar to the feature we want to implement and then use that new knowledge to build the feature in our project.
  - People who had researched a particular aspect of a language in order to implement a feature would pair with those less familiar with that language to prevent any knowledge towers developing.


# Feature Roadmap

This isn't the end of the story for WhatStack. To have a sneak peek at what we'll be working on for WhatStack in the future, [please visit our wiki page!](https://github.com/FayeCarter/WhatStack/wiki/Roadmap---User-Stories)


# Team Rituals

## Daily Schedule
|      Time     |    Activity    |
|---------------|----------------|
|10am - 10:30am |Check in/Standup|
|10:30am - 12:30|Pairing         |
|12:30 - 2:00pm |Lunch/Meditation|
|2:00pm - 2:15pm|Check in        |
|2:15pm - 5:30pm|Pairing         |
|5:30pm - 6:00pm|Retro           |

## Team Charter
On the first day as a team we asked ourselves 9 questions and used these to make a team charter describing the expectations we had of each other in terms of how we would behave and what we would bring to the project. [To view the team charter please click here](https://docs.google.com/document/d/1cNusSTAwBtW7N1OJQLXIJcQ3w3KQ1dgRsCGy9vDCLwA/edit)

## Agile workflow

An essential part of this project was how we worked. We all agreed to follow an agile workflow, with 2 day sprints to track velocity. At the start of each sprint we would engage in a session of planning poker to determine as a group how difficult each feature would be to implement. At the beginning of each day we had a stand up to discuss previous blockers and potential blockers. At the end of each sprint we would have a slightly longer retro where we would discuss how we felt the team had fared over the course of the sprint and what we could do to address any problems that were identified.

< not 100% on this section, might need reworking> 


------------
------------
------------
------------

## Running tests

### E2E - Cypress

```
# from project root - without user interface
npm run cypress:run

# with user interface
npm run cypress:open
```

### Front-end - React

```
# from client folder
npm run test
```

## Getting started

run npm install in both the root folder and client folder.

allow VS code to do formatting on save



