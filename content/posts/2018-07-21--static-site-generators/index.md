---
title: Static site generators
subTitle: ...And why I chose Gatsby
cover: gatsby.jpg
---

These days there's a plethora of static site generators. This blogpost describes what they are and when they can be used. By the way, this blog is deployed using the [Gatsby](https://gatsby.com) static site generator.

![Warner Bros](./gatsby.jpg)

### But... it’s only static?

The word static naturally brings along a negative connotation. But should it really? A static site delivers it's content to the user exactly as it’s stored. As opposed to a dynamic website which either at the server side or the client side pull in information, allow more interaction etc. Static websites do not have to be plain though, they can have fancy moving elements and a responsive design.

### Comparison to CMS (Wordpress)
When you visit a WordPress (or Drupal or a different CMS), WordPress gets content from the database (SQL or noSQL), builds the page using a template,  and sends the complete HTML page back to your browser. The content to be displayed is "built" at that very moment.

In contrast, a static site generator builds the pages in advance. When the developer launches the *build* command, it fetches data from different sources, applies the configured templates and returns the static files. They can then be hosted on a webserver (e.g. Apache, Nginx).

But they allow you to easily set up your site/blog/documentation on a simple server, without even the need for a database. They also allow a lot of flexibility in terms of static content resources.

### Static content

Where and how do you define your static content? Anywhere.. It could be a local file you have, it can be a published article e.g. on medium (you don’t want to publish that content again, you want them linked), data in your Wordpress CMS, etc. The power of a static site generator truly becomes clear when combining many different resources.

### Static site generators

There's a plethora of static site generators, check out https://www.staticgen.com/ and get overwhelmed! Let’s consider generators which will make a website/blog. (There are e.g. also documentation-page generators) Some of the best known frameworks are:
* Jekyll (Ruby)
* Gatsby (React)
* Hugo (Go)
* Hexo (Node)

These are all very viable solution. I didn't try all of them so I will not go into comparison. There's a few (small) reasons why I chose Gatsby. It caught my attentention when I read and heard (in podcasts) about it a few times. I'd been wanting to get a bit more into react, so that ticked a box as well. When I checked out the Gatsby docs, and saw the rich integration possibilities, I was sold on trying it out.

### Gatsby, not your average SSG
These are some of the frameworks Gatsby integrates:
* React: bring SPA ("single-page app") features
* GraphQL: for querying data from different resources
* Webpack: JS bundling

### Conclusion
You can have your blog up in no time with any of these frameworks. But you might want to go fidling with the layout as well. Then, if you’re crazy for react, I’d recommend trying Gatsby. If you prefer some “plain” JS you can opt for Jekyll.
​
