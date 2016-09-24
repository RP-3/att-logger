var http = require('http');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    database : 'att_logger',
    //comment out user and password for dev
    user: 'postgres',
    password: 'postgres'
  }
});

setInterval(function(){
  logAttStatus();
}, 60000);

function logAttStatus(){

  var start = Date.now();
  http.get('http://www.google.com/index.html', (res) => {

    res.resume();

    return knex('call_log')
    .insert({
      status_code: res.statusCode,
      status_message: res.statusMessage,
      response_time: Date.now() - start,
      err_code: null,
      err_errno: null,
      err_syscall: null,
      err_hostname: null,
      err_host: null,
      err_port: null,
    })
    .then(function(resp){
      return 1;
    });

  }).on('error', (e) => {

    knex('call_log')
    .insert({
      status_code: null,
      status_message: null,
      response_time: Date.now() - start,
      err_code: e.code,
      err_errno: e.errno,
      err_syscall: e.syscall,
      err_hostname: e.hostname,
      err_host: e.host,
      err_port: e.port,
    })
    .then(function(resp){
      return 0;
    });

  });

}
