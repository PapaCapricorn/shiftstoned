// format card images for articles
module.exports = (cardName, extraClasses = '') => {
  let cardImage = cardName.replace(/\s/g, '_');
  let width = 220; // Natural size of site's card images
  let height = 350;

  let smallImageClass = 'ci-small';
  if (extraClasses.includes(smallImageClass)) {
    width = 125; // 'small image' card sizes
    height = 198.867;
  }

  return `<figure class="side-image card-image ${extraClasses}">
  <img src="/images/cards/${cardImage}.png" alt="${cardName} card" width="${width}" height="${height}" loading="lazy">
</figure>`;
};