// convert an integer into its ordinal
// copied from: https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number/13627586

module.exports = (n) => {
    if (Number.isInteger(n)) {
      nth = [,'st','nd','rd'][n/10%10^1&&n%10]||'th';
      return n + nth;
    }
    return n;
  };