const db = require('../db');

const getMentorResources = (user_id) => {
  return db.knex
  .select()
  .from('resources')
  .leftJoin('categories', 'resources.category_id', 'categories.id')
  .where({user_id: user_id})
  .orderBy('created_at');
};

const getMenteeResources = (user_id) => {
  return db.knex
  .select()
  .from('resources')
  .innerJoin('users_resources', function() {
    this.on('users_resources.user_id', '=', Number(user_id))
    .andOn('resources.id', '=', 'users_resources.resource_id');
  });
};

const postResource = (resource) => {
  return db.knex('resources')
  .insert({
    user_id: resource.user_id,
    title: resource.title,
    description: resource.description,
    URL: resource.URL,
    category_id: resource.category
  })
  .catch((err) => {
    console.log(err);
  });
};

const saveResource = (user_id, resource_id) => {
  return db.knex('users_resources')
  .insert({
    user_id: user_id,
    resource_id: resource_id
  });
};

module.exports = {
  getMentorResources: getMentorResources,
  getMenteeResources: getMenteeResources,
  postResource: postResource,
  saveResource: saveResource
};
