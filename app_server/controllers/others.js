/* GET 'about' page */
const about = function (req, res) {
  res.render("generic-text", {
    title: "About Ojas",
    content:
      "Ojas Services was created to help people find places Where they Get Good Milk Products.<br/><br/> Great Time To Taste",
  });
};
module.exports = {
  about,
};
