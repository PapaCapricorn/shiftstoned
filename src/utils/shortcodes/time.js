const { DateTime } = require("luxon");

// format time - default to localized time in 12-hour format (E.g. 3:15 PM)
// see Luxon docs for full list of format tokens: https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
module.exports = (dateObj, format = 't') => {
  var time24h = DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('T');
  var time12h = DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  return `<time datetime="${time24h}">${time12h}</time>`;
};