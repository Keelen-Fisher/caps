# caps

## Lab 12

## Approach

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

![UML](assets/UML%20Rough%20Draft%20for%20Lab%2012.png)

- [Link to PR:](https://github.com/Keelen-Fisher/caps/pulls?q=is%3Apr+is%3Aclosed)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Lab 13

## Description

### One Queue to hold all queues

- In this phase, we are going to implement a system to guarantee that notification payloads are read by their intended subscriber. Rather than just triggering an event notification and hope that client applications respond, we’re going to implement a “Queue” system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

- In Phase 3, we are building a set of features to help manage deliveries made by CAPS Drivers. This will simulate a delivery driver receiving a list of orders from a Queue and “scanning” package codes on delivery. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver many packages while the retailer is not connected to the dashboard, the vendor client should be guaranteed to receive “delivery” notifications from the Queue system.

## Requirements Lab 13

- As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
- As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.
- As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
- As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
- As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.

- As a developer, I want to create a system of tracking who is subscribing to each event.
- As a developer, I want to place all inbound messages into a “queue” so that my application knows what events are to be delivered.
- As a developer, I want to create a system for communicating when events have been delivered and received by subscribers.
- As a developer, I want to delete messages from the queue after they’ve been received by a subscriber, so that I don’t re-send them.
- As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.

Installed:

    "socket.io": "^4.5.2",
    "socket.io-client": "^4.5.2"

## Diagram

![UML](assets/Lab%2013%20Diagram-Description.png)

- [Link to PR](https://github.com/Keelen-Fisher/caps/pull/5)
