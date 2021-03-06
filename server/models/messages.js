'use strict';

const db = require('../db');

const getQuestions = (user_id) => {
  return db.knex
  .select()
  .from('messages')
  .where({user_id: user_id})
  .orderBy('created_at');
};

const postQuestion = (question) => {
  return db.knex('messages')
  .insert({
    user_id: question.user_id,
    title: question.title,
    message: question.message
  });
};

const postReply = (reply) => {
  return db.knex('messages')
  .insert({
    user_id: reply.user_id,
    message: reply.message,
    reply_to_message_id: reply.reply_to_message_id,
    root_message_id: reply.root_message_id
  });
};

module.exports = {
  getQuestions: getQuestions,
  postQuestion: postQuestion,
  postReply: postReply
};
