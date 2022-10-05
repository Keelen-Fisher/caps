# caps

## Approch

- Attend lecture videos for yesterday's lab and today's lab on this application.

- take notes on the importance if using Socket.io and Event Driver.

- So here's the concept:

  - Nearly everything in the world is event driven

  - due to something happen, a certain action will come into effect. This sequence happens over a billion times a day.

- Moving over to actual sofware application:

  - everything in JS is an object.

  - Most action in js are event driven.

Moving forward, build the Event Driver from lab 11, transition to lab 12 and work on socket.io

- Event Driven Paradigm: Observable design pattern. pub/sub is: publish and subscribe.

- Transaction of information.

## Requirements

- The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but our developer story changes to reflect the work needed for refactoring.

  - As a vendor, I want to alert the system when I have a package to be picked up.
  - As a driver, I want to be notified when there is a package to be delivered.
  - As a driver, I want to alert the system when I have picked up a package and it is in transit.
  - As a driver, I want to alert the system when a package has been delivered.
  - As a vendor, I want to be notified when my package has been delivered.

- And as developers, here is our updated story relevant to the above.

  - As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and client applications

## Installed

    "dependencies": 

      "base-64": "^1.0.0",
      "chance": "^1.1.8",
      "dotenv": "^16.0.3",
      "eslint": "^8.24.0",
      "jest": "^29.1.2",
      "nodemon": "^2.0.20",
      "sequelize": "^6.24.0",
      "socket.io": "^4.5.2",
      "socket.io-client": "^4.5.2",
      "supertest": "^6.3.0"

- Diagram:

![UML](UML%20Rough%20Draft%20for%20Lab%2012.png)
