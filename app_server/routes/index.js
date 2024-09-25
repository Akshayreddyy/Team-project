const express = require('express');
const router = express.Router();
const ctrlLocations =
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);

const express = require('express');
const router = express.Router();
const { homelist, locationInfo, addReview, contactPage } = require('./controllers');

// Existing routes
router.get('/', homelist);
router.get('/location/:id', locationInfo);
router.get('/location/review/new', addReview);

// New contact route
router.get('/contact', contactPage);
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact form submitted by ${name} (${email}): ${message}`);
  res.redirect('/contact?success=true');
});

module.exports = router;
