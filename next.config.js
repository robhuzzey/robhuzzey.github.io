// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "books": { page: "/books" },
      "songs": { page: "/songs" },
      "videos": { page: "/videos" }
    }
  },
}
