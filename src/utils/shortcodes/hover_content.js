// hover content, should be used nested inside a 'hover-text' shortcode.

module.exports = (content) => {
    return `<span class="hover-content" data-hover-position="right">${content}</span>`;
  };