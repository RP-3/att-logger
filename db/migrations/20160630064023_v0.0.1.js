
exports.up = function(knex, Promise) {

  return knex.schema.createTable('call_log', function(t){

    t.increments()
      .index();
    t.timestamp('timestamp')
      .notNullable()
      .defaultTo(knex.fn.now());
    t.integer('status_code')
      .index();
    t.string('status_message')
      .index();
    t.string('err_code')
      .index();
    t.string('err_errno')
      .index();
    t.string('err_syscall')
      .index();
    t.string('err_hostname')
      .index();
    t.string('err_host')
      .index();
    t.integer('err_port')
      .index();

  });

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('call_log');

};
