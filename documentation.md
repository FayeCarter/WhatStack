# Problem description

During out time at makers we have been blocked. A lot. Asking for help can be tough, it's difficult to acknowledge your own ignorance and sometimes places can be less than welcoming to newcomers asking a question that's been covered before - think back to all the times you've seen someone on stackoverflow saying "that's a stupid question" or "This is a duplicate of <some other question which while similar isn't actually your question>" we decided that 
- it shouldn't be so hard to ask for help 
- you can reach a solution quicker through a 5 minute conversation than asking a question, waiting hours and reading through a couple of laboriously written 'answers' that don't necessarily solve your problem.
- if someone has the same problem as you, they should be able to be part of that conversation.

# Solution

Whatstack is an application designed to solve the problem of where do you go when you need an answer to your problem not in 5 hours, but right now! A problem solving solution based around instant messaging, where anyone with a Github account can jump in and contribute

# Accessing WhatStack

Want to check the application out? [Click here!](https://whatstack.herokuapp.com)

## Logging in

Whatstack is designed to be easy to access for developers, so instead of having to create an account and register, you can simply login with your Github account.

## opening a chat room

once you're logged in you'll be taken to the /rooms screen, which is where you can either make a new room to help you with your problem, or if you see another room already there that covers it you can join that conversation instead.

## sending (*plaintext*) messages

Once you're in a room you can contribute to the conversation by typing your message into the text area and clicking the 'send message' button.

## sending (*codeblock*) messages

Want to send a block of code? No problem, simply type your code into the text area and click the 'send code block' button instead!


# frontend

WhatStack frontend is written using React, with functional components and the testing framework is the react testing library.

## front end file structure


# backend

WhatStack Backend is written using nodeJS and express, with MongoDB serving as the database. The backend testing framework is jest.

## backend file structure


# socket testing

 `A socket is one endpoint of a two-way communication link between two programs running on the network, for this project a socket (socket.io) was used to facilitate realtime messaging`

Socket testing started off as something of a challenge for this project, as there is a dearth of documentation on how to approach testing a socket. After some trial and error a method of testing sockets was discovered and and examples of testing both client and server side socket components can be found in the tests for this project.

# The team

## daily schedule

## sprint rituals

## 