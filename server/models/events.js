'use strict';

const db = require('../db');

const getEvents = (user_id) => {
  return db.knex
  .select()
  .from('events')
  .where({user_id: user_id})
  .orderBy('created_at');
};

const postEvent = (event) => {
  return db.knex('events')
  .insert({
    user_id: event.user_id,
    title: event.title,
    description: event.description,
    location: event.location,
    date: event.date,
    time: event.time
  });
};

const attendEvent = (user_id, event_id) => {
  return db.knex('users_events')
  .insert({
    user_id: user_id,
    event_id: event_id
  });
};

const getMenteeEvents = (user_id) => {
  return db.knex
  .select()
  .from('events')
  .innerJoin('users_events', function() {
    this.on('users_events.user_id', '=', Number(user_id))
    .andOn('users_events.event_id', '=', 'events.id');
  });
};

module.exports = {
  getEvents: getEvents,
  postEvent: postEvent,
  attendEvent: attendEvent,
  getMenteeEvents: getMenteeEvents
};
