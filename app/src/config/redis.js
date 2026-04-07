const redis = require("redis");

const client = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`,
});

client.connect();

module.exports = client;