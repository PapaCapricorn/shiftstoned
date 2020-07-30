// convert input strings into icon images

// influence/faction icons lookup table
const lut = {
	"f" : "Fire",
	"p" : "Primal",
	"t" : "Time",
	"j" : "Justice",
	"s" : "Shadow"
};

module.exports = (str) => {
  let s = str.toLowerCase();
  let result;
  const regex = /[^fptjs]/; // influence abbreviations

  if (s.match(regex)) { // return any input that isn't made from influence abbreviations as a single icon
    result = `<img alt="${str}" title="${str}" src="/epc/icon-${s}.png" style="width: 19px; height: 19px; vertical-align: text-bottom;" />`;
  } else { // convert influence abbreviations to multiple icons
    icons = s.split('');
    icons.forEach( (influence, index) => {
      influence = lut[influence]; // lookup icon
      icons[index] = `<img alt="${influence}" title="${influence}" src="/epc/icon-${influence.toLowerCase()}.png" style="width: 19px; height: 19px; vertical-align: text-bottom;" />`;
    });

    result = icons.join('');
  };
  return result;
};