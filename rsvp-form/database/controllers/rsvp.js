const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (obj) => {
  Rsvp.save((err, obj) => {
    if (err) {
      console.log(err);
    }
    console.log(`saved: ${obj}`);
  })
};

module.exports = findRsvpAndUpdate;
