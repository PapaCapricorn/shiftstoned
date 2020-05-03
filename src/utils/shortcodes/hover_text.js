// wrapper class containing visible text
// hover content should be specified in a 'hover-content' shortcode, nested inside this one

module.exports = (content) => {
    return `<span class="hoverable">${content}</span>`;
  };