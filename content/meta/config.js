const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Blog", // <title>
  shortSiteTitle: "Blog wimmar.be", // <title> ending for posts and pages
  siteDescription: "Programming (embedded and web) blogposts",
  siteUrl: "https://wimmar.be/blog",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Wim Marynissen",
  authorTwitterAccount: "wim_mar",
  // info
  infoTitle: "Wim Marynissen",
  infoTitleNote: "Software blog",
  //infoTitleNote: "software engineering blog",
  // manifest.json
  manifestName: "Software blog",
  manifestShortName: "BlogWimMar", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "wim.marynissen2@telenet.be",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/WimMar" },
    { name: "twitter", url: "https://twitter.com/wim_mar" },
    { name: "facebook", url: "http://facebook.com/" },
    { name: "linkedin", url: "http://linkedin.com/in/wimmar" }
  ]
};
