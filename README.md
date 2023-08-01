## Express.js Note Taker

This is an Express.js application called "Note Taker" that allows users to write, save, and organize their notes. The application has a simple front end and a back end that uses Express.js to handle API and HTML routes. The notes are saved and retrieved from a JSON file.

## User Story
As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Table of Contents
Installation
Usage
API Routes
Deployment
Bonus Features
Grading Criteria
Contact

 ## Installation
To install the necessary dependencies, run the following command:

Copy code:
'npm install'

## Usage
To start the application, use the following command:

npm start

Visit http://localhost:3000 in your web browser to access the Note Taker application.

## API Routes
The application has the following API routes:

GET /api/notes: Retrieves all saved notes as JSON.
POST /api/notes: Receives a new note to save on the request body, adds it to the db.json file, and returns the new note to the client.
Deployment
The application is deployed to Heroku. You can access the live application using the following link: Live Application

## Bonus Features
As a bonus, the application also supports deleting notes. The following route is available:

DELETE /api/notes/:id: Receives a query parameter containing the ID of the note to delete. It removes the note with the given ID from the db.json file.


© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.