const saysHi = require('./say-hi-later.js')

var handler = async (req, res) => {
  console.log(new Date());
  var hi = await saysHi.hiInTwoAsync();
  console.log(hi);
  console.log(new Date());
  res.end('Hello World from Node.js\n')
}

module.exports = { handler: handler };
