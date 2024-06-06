module.exports.datastores = {
  default: {
  },
  mysql: {
    adapter: 'sails-mysql',
    host: 'db',
    user: 'root', 
    password: 'my_secret_password', 
    database: 'estudent', 
    port: 3306,
    ssl: false,
    insecureAuth : true
  }
};
