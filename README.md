# Registration MicroService

## Dependencies

the application requires the next dependencies to be installed

- nodejs
- mongoDB

## Instructions

- clone this repo in your computer.
- open project directory in terminal and run <code>npm install</code>.
- adding .env file in the root directory.
- write the next in your .env file <code>API_PORT_NUMBER=6005</code> for port and <code>DATABASE_NAME="registration"</code> and token secret <code>TOKEN_PRIVATE_KEY="your secret code"</code> finally add the hash key <code>HASH_PRIVATE_KEY="your hash key"</code>.
- finally in the terminal write <code>npm start</code> to start the app.

## App features

- multi-language errors and responses
- strong error handling
- strong validation type
- well-structured design
- well-organized filesystem
- high ability to be extended
- high customization
- fast, secure api channel
- client friendly response messages

## Available services

- login service <code>POST: localhost:6005/api/login</code>.
- signup service <code>POST: localhost:6005/api/signup</code>.
