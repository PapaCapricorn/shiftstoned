// make faction icon
module.exports = (faction) => {
  return `<img alt="${faction}" src="/epc/images/icon-${faction.toLowerCase()}.png" style="width: 19px; height: 19px;" />`;
};
