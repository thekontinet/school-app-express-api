require('dotenv').config();
const morgan = require('morgan');
const Repositories = require('./src/Repositories');
const Config = require('./src/Config/app');
const Database = require('./src/Database/mongo');
const container = require('./src/container');

// Register Dependencies
container.register('config', Config);
container.register('repositories', Repositories);
container.register('logger', morgan).addArgument('tiny');

Database.connect(container.get('config'))
    .catch(function(err) {
      console.log('Database failed to connect. : ' + err.message);
    })
    .then(function() {
      const app = require('./src/app')(container);

      const PORT = process.env.PORT || 5000;

      if (process.env.NODE_ENV === 'development') {
        app.listen(PORT, function() {
          console.log(
              `Development sever started listening to http://127.0.0.1:${PORT}`,
          );
        });
      } else {
        app.listen();
      }
    });
