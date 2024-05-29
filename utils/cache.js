// const mongoose = require("mongoose");
// const redis = require("redis");

// const client = redis.createClient({url:process.env.REDIS_URL_EXTERNAL});
// const exec = mongoose.Query.prototype.exec;

// mongoose.Query.prototype.cache = function ({ query }) {
//   this.useCache = true;
//   this.allQueries = query;
//   return this;
// };

// mongoose.Query.prototype.exec = async function () {
//   if (!this.useCache) {
//     return exec.apply(this, arguments);
//   }
//   await client.connect();
//   const additionalQueries = this.allQueries;
//   const hashName = JSON.stringify(additionalQueries.productsType);
//   const key = JSON.stringify(additionalQueries);
//   const cachedData = await client.hGet(hashName, key);
//   if (cachedData) {
//     const doc = JSON.parse(cachedData);
//     await client.disconnect();
//     return Array.isArray(doc)
//       ? doc.map((d) => new this.model(d))
//       : new this.model(doc);
//   }
//   const result = await exec.apply(this, arguments);
//   await client.hSet(hashName, key, JSON.stringify(result), {
//     EX: 300,
//     NX: true,
//   });
//   await client.disconnect();
//   return result;
// };

// const cleanCache = async (key) => {
//   await client.connect();
//   client.del(JSON.stringify(key));
//   await client.disconnect();
// };

// module.exports = cleanCache;
