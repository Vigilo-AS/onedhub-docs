# Getting started

Vigilo Core API is a set of RESTful web services that provide access to data in Vigilo. Available modules are:

* [Base module](/core/base-module) 
* [Variable pay module](/core/variable-pay-receipt)
* [Schedules module](/core/schedules-module) <Badge text="Planning" type="warning"/>

## Concepts

Vigilo Core API is build upon modern technology and architecture. Our REST API is built with key principles that ensure
a robust and scalable architecture for distributed systems. Here is a brief overview of the basic concepts we use:

* REST (Representational State Transfer): This is the architectural style that guides the design of our API, with the
  goal of enabling scalable interaction with web-based services. To delve deeper into REST principles, visit Wikipedia:
  Representational state transfer.

* [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) (Hypermedia as the Engine of Application State): This constraint of
  RESTful design ensures that our clients
  remain decoupled from server-side logic, and promotes long-term flexibility and evolution of the API. You can read
  more about HATEOAS on Wikipedia: HATEOAS.

* [HAL specification](https://stateless.group/hal_specification.html) (Hypertext Application Language): We use HAL to
  standardize the way resources are linked to each other within our
  API, making it easy to navigate and consume. More information about HAL is available on Wikipedia: Hypertext
  Application Language.
*
* [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html): We strive to be at level
  3
  of the Richardson Maturity Model. This means that we use HATEOAS to provide links to related resources in our API
  responses.

* [OpenAPI](https://swagger.io/specification/): We use OpenAPI to define our API, making it easy to understand and
  consume. OpenAPI is a specification for building APIs, and is used to define the structure of our API in a machine-
  readable format.

## Authentication

For more information about how to authenticate with the API, see the [Authentication](/onedhub/auth) section.

## Environments

For more information about the different environments and how to access them, see
the [Environments](/onedhub/environments) section.