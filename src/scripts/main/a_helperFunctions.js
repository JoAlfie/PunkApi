/**
 * Helper function to create element
 * @param {string} element = element type
 */
const createNode = element => document.createElement(element);

/**
 * Helper function to append element to parent
 * @param {object} parent = element to append to
 * @param {object} element = child to append to parent
 */
const append = (parent, element) => parent.appendChild(element);
