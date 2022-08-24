/**
 *
 * @param {String} data
 * @param {Number} code
 * @param {Boolean} status
 * @return {Object}
 */
function response(data, code = 200, status) {
  if (status) {
    return {status, code, data};
  }
  return {error: data, code};
}

module.exports = {
  response,
};
