
/**
 * Is subdomain?
 */

exports.subdomain = function(subdomain) {
  return subdomain.length >= 1;
};

/**
 * Is email?
 */

exports.email = function(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

/**
 * Is password?
 */

exports.password = function(password) {
  return password.length > 1;
}

/**
 * Is Support chat system?
 */
exports.chatsystem = function(chatsystem){
  return true;
}
