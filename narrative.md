# Narrative - Stuff

Stuff is going to be a fairly chunky service. It shouldn't have a singular purpose, but it is more an exercise in creating and maintaining a modular monolith.
It will also be a playground for work-related stuff. I'm currently working with a collection of:

- Runtime: Node.js
- Language: Typescript
- Platform: AWS
- Data: PostgreSQL
- Libraries:
  - Typebox
  - Fastify

The above is fairly vanilla, and yet it's so easy to make a horizontally structured monolith instead of a vertical one.
I'm a big fan of [feature folders](http://www.kamilgrzybek.com/design/feature-folders/), and yet so many projects I come across seem to lean towards tech folders - such as `controllers`, `model`, `views`, the list goes on for a while.

I like having related stuff be close together, simple as that.

Secondly, I'm a big fan of an outside-in architecture, such as Clean Architecture, or the Hexagon/Ports-and-Adapters architecture. One argument that is often raised wether the added complexity is worth it. This argument shows a backwards-facing approach. Every solution needs to solve a problem that - once solved - is now behind us.

Deeper planning can and should go into your architectural design such that you're now forward-facing. In practically every project I've ever experienced, having a modular design with strong dependency inversion principles starts paying dividends after the first few features have landed.

Those windfalls usually take the form of rapid composability of existing functionality, ease of testing, ease of safe change.
So with that, I'll continue to experiment with a structure that's started to come out of some other side-projects, and one that I've started applying at work as well.
It doesn't rely on an explicit framework, per se, but rather on a few core principles that can be pulled straight out of [the big blue book](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215).
