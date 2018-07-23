---
title: Static site generators
subTitle: ...And why I chose Gatsby
cover: gatsby.jpg
---

These days there's a plethora of static site generators. This blogpost describes what they are and when they can be used. By the way, this blog is deployed using the [Gatsby](https://gatsby.com) static site generator, using Markdown for the content.

![Warner Bros](./gatsby.jpg)

### But... it’s only static?

The word static naturally brings along a negative connotation. But should it really? A static site delivers it's content to the user exactly as it’s stored. As opposed to a dynamic website which either at the server side or the client side pull in information, allow more interaction etc. Static websites do not have to be plain though, they can have fancy moving elements and a responsive design.

### Comparison to CMS (Wordpress)

When you visit a WordPress (or Drupal or a different CMS), WordPress gets content from the database (SQL or noSQL), builds the page using a template,  and sends the complete HTML page back to your browser. The content to be displayed is "built" at that very moment.

In contrast, a static site generator builds the pages in advance. When the developer launches the *build* command, it fetches data from different sources, applies the configured templates and returns the static files. They can then be hosted on a webserver (e.g. Apache, Nginx).

But they allow you to easily set up your site/blog/documentation on a simple server, without even the need for a database. They also allow a lot of flexibility in terms of static content resources.

### Static content

Where and how do you define your static content? Anywhere.. It could be a local file on your computer, it can be a published article e.g. on medium (you don’t want to publish that content again, you want them linked), data in your Wordpress CMS, etc. The power of a static site generator truly becomes clear when combining many different resources.

### Static site generators

There's a plethora of static site generators, check out https://www.staticgen.com/ and get overwhelmed! Let’s consider generators which will make a website/blog. (There are e.g. also documentation-page generators, like the ones github will host for you) Some of the best known frameworks are:
* Jekyll (Ruby)
* Gatsby (React)
* Hugo (Go)
* Hexo (Node)

These are all very viable solution. I didn't try all of them so I will not go into comparison. There's a few (small) reasons why I chose Gatsby. It caught my attention when I read and heard (in podcasts) about it a few times. I'd been wanting to get a bit more into react, so that ticked a box as well. When I checked out the Gatsby docs, and saw the rich integration possibilities, I was sold on trying it out. I'm only using Markdown for these blogposts though.

### Gatsby, not your average SSG

These are some of the frameworks Gatsby integrates:
* React: bring SPA ("single-page app") features
* GraphQL: for querying data from different resources
* Webpack: JS bundling
The SPA which is generated might not fit the definition of a "static" site. But the content is static since it's gathered and packed at build time.

### How do I get started?

* If you haven't yet, [install node](https://nodejs.org/en/download/package-manager/)
  > Tip: use a package manager
* Install the Gatsby CLI: `npm install -g gatsby` or add it as a dependency to your project

* Look for a starter template that suits your purpose, [here are some](https://www.gatsbyjs.org/docs/gatsby-starters/)
* Clone the boilerplate, for example: `gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog`

### Conclusion

You can have your blog up in no time with any of these website-generating frameworks. They allow alot of flexibility in terms of how/where you define your static content, and (by being static) require only a simple file-hosting server. These static sites don't have to be "plain"/boring. They are designer friendly, you can go and tweak your layout. If you’re craving for some React development, I’d recommend trying Gatsby. If you prefer some “plain” JavaScript you can e.g. opt for Jekyll.
