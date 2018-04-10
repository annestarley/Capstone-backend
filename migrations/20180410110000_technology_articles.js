exports.up = function(knex, Promise) {
  return knex.schema.createTable('technology_articles', table => {
    table.increments()
    table.string('author').defaultsTo('')
    table.text('description').defaultsTo('')
    table.string('publishedAt').notNullable()
    table.string('source').notNullable()
    table.text('title').notNullable().unique()
    table.float('anger').notNullable()
    table.float('disgust').notNullable()
    table.float('fear').notNullable()
    table.float('joy').notNullable()
    table.float('analytical').notNullable()
    table.float('confident').notNullable()
    table.float('tentative').notNullable()
    table.float('agreeableness').notNullable()
    table.float('conscientiousness').notNullable()
    table.float('extraversion').notNullable()
    table.float('openness').notNullable()
    table.text('url').notNullable()
    table.text('urlToImage').defaultsTo('')
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('technology_articles')
};
