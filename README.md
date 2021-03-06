# Social-Network-API

## Description
Using express & MongoDB to create a social network API.  With this application you can create users, thoughts and reactions to those thoughts.  You can also add user friends to associate them.

## My Task
My task was to build a api for a social network using mongo. Doing this to create users, add friends to users, create thoughts and reactions to those thoughts.

## List of Technologies
- npm
- express
- Mongo
- mongoose
- insomina
- databases

## Github URL
https://github.com/mclanea92/Social-Network-API

## Video Walkthough
 https://share.vidyard.com/watch/8tH7qVHp73QytGJmQiWERK?

 ## Acceptance Criteria
 ```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Tests
Run npm i in the terminal to add the npm packages required. Then in the terminal run node server to get the program to work in insomina

## Screenshots
Screenshot below shows the route to get all users that have been created

![screenshot of all users](./public/images/allusers.png)


Screenshot below shows all thoughts that have been created by the users

![screenshot of all thoughts](./public/images/allthoughts.png)

Final screenshot is how to add a user to the database
![screenshot of how to add user](./public/images/adduser.png)

## Questions
If you have any questions please feel free to reach me at mclanea92@gmail.com

## License
MIT License

Copyright (c) 2022 Adam McLane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
