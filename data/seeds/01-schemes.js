
exports.seed = function(knex) {
  return knex('schemes').insert([
    {scheme: 'World Domination'},
    {scheme: 'Get Rich Quick'},
    {scheme: 'Revenge'},
    {scheme: 'More Instagram Followers'},
    {scheme: 'Find the Holy Grail'},
    { scheme: 'Steal Coworker\'s Identity'}
  ]);
};
