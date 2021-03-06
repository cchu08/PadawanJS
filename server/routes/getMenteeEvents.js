'use strict';

const Events = require('../models/events.js');

module.exports = (req, res) => {
  const user_id = req.params.uid;

  Events.getMenteeEvents(user_id)
  .then((events) => {
    res.status(200).send(events);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMenteeEvents': err});
  });
}
