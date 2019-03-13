const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Blog", // <title>
  shortSiteTitle: "Blog wimmar.be", // <title> ending for posts and pages
  siteDescription: "Programming (embedded and web) blogposts",
  siteKeywords: "Programming, Blog, Engineering, Web",
  siteUrl: "https://wimmar.be/blog",
  pathPrefix: "/blog",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Wim Marynissen",
  authorTwitterAccount: "wim_mar",
  // info
  infoTitle: "Programming notes",
  infoTitleNote: "by Wim Marynissen",
  // infoTitleNote: "software engineering blog",
  // manifest.json
  manifestName: "Programming notes",
  manifestShortName: "BlogWim", // max 12 characters
  // manifestStartUrl: "/blog/",
  //manifestStartUrl: "/blog/index.html",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "wimmar0@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/WimMar" },
    { name: "twitter", url: "https://twitter.com/wim_mar" },
    // { name: "facebook", url: "http://facebook.com/" },
    { name: "linkedin", url: "http://linkedin.com/in/wimmar" }
  ]
};
