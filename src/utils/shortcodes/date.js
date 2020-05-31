const { DateTime } = require("luxon");

// format date - default to localized date with full month (E.g. May 31, 2019)
// see Luxon docs for full list of format tokens: https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
module.exports = (dateObj, format = 'DDD') => {
  var dateISO = DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO();
  var dateReadable = DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  return `<time datetime="${dateISO}">${dateReadable}</time>`;
};