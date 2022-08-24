const {mongoose} = require('mongoose');

/**
 * Database
 */
class Database {
  /**
   *
   * @param {Config} Config
   */
  constructor(Config) {
    this.config = Config.database.mongo;
  }

  /**
   * Connect DB
   * @param {Config} config
   */
  static async connect(config) {
    return mongoose.connect(config.database.url);
  }
}

module.exports = Database;
